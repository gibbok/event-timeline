import { useGetEvents } from "@/api/useGetEvents/useGetEvents";
import { ErrorMessage } from "@/components/commons/ErrorMessage/ErrorMessage";
import { CircularProgress } from "@mui/material";
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
  const { data, isLoading, error } = useGetEvents<EventsInfoUI>({
    page,
    limit: EVENTS_PER_PAGE,
    transform: (data) => ({
      countEvents: data.countEvents,
      events: tranformResponseApiToUiData(
        sortEventsByOccurenceDesc(data.events)
      ),
    }),
  });

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <ErrorMessage message="Network Request Failed" />;
  }

  const handleChangePage = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
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

  return null;
};
