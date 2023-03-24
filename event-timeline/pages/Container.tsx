import { useGetEvents } from "@/api/useGetEvents/useGetEvents";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { EventTimeline } from "./EventTimeline";
import { tranformResponseApiToUiData } from "./transform";

export const Container = () => {
  const { data, isLoading } = useGetEvents(tranformResponseApiToUiData);

  return <div>{JSON.stringify(data)}</div>;
};
