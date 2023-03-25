import { useGetEvents } from "@/api/useGetEvents/useGetEvents";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { EventTimeline } from "./EventTimeline";
import {
  sortEventsByOccurenceDesc,
  tranformResponseApiToUiData,
} from "./transform";
import { EventsInfoUI } from "./types";

const EVENTS_PER_PAGE = 10;

export const EventTimelineContainer = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetEvents<EventsInfoUI>({
    page,
    limit: EVENTS_PER_PAGE,
    transform: (data) => {
      return {
        countEvents: data.countEvents,
        events: tranformResponseApiToUiData(
          sortEventsByOccurenceDesc(data.events)
        ),
      };
    },
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  if (data) {
    return (
      <EventTimeline
        data={data.events}
        page={page}
        countPages={Math.ceil(data.countEvents / EVENTS_PER_PAGE)}
        onChangePage={handleChangePage}
      />
    );
  }
};
