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
  const { data, isLoading } = useGetEvents<EventsUI>({
    page: 1,
    limit: 10,
    transform: (data) =>
      tranformResponseApiToUiData(sortEventsByOccurenceDesc(data)),
  });

  if (!data && isLoading) {
    return <EventTimeline status="loading" />;
  }
  if (data) {
    return <EventTimeline status="loaded" data={data} />;
  }
};
