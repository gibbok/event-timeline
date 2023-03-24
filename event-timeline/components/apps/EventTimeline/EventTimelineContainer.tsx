import { useGetEvents } from "@/api/useGetEvents/useGetEvents";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { EventTimeline } from "./EventTimeline";
import {
  EventsUI,
  tranformResponseApiToUiData,
} from "../../../pages/transform";

export const EventTimelineContainer = () => {
  const { data, isLoading } = useGetEvents<EventsUI>({
    transform: tranformResponseApiToUiData,
  });

  return <div>{JSON.stringify(data)}</div>;
};
