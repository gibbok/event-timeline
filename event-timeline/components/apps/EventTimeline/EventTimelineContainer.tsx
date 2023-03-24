import { useGetEvents } from "@/api/useGetEvents/useGetEvents";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { EventTimeline } from "./EventTimeline";
import {
  EventsUI,
  sortEventsByOccurenceDesc,
  tranformResponseApiToUiData,
} from "../../../pages/transform";

export const EventTimelineContainer = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetEvents<EventsUI>({
    page,
    limit: 10,
    transform: (data) =>
      tranformResponseApiToUiData(sortEventsByOccurenceDesc(data)),
  });

  if (!data && isLoading) {
    return <EventTimeline status="loading" />;
  }

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  if (data) {
    return (
      <EventTimeline
        status="loaded"
        data={data}
        page={page}
        countPages={5}
        onChangePage={handleChangePage}
      />
    );
  }
};
