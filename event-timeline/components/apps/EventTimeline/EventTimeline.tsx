import { EventsUI } from "@/pages/transform";
import { Box, CircularProgress } from "@mui/material";
import React from "react";
import { EventInfo } from "./EventInfo";

type EventTimelineLoading = Readonly<{
  status: "loading";
}>;

type EventTimelineLoaded = Readonly<{
  status: "loaded";
  data: EventsUI;
}>;

type EventTimelineProps = EventTimelineLoading | EventTimelineLoaded;

export const EventTimeline = (props: EventTimelineProps) => {
  if (props.status === "loading") {
    return <CircularProgress />;
  }
  return (
    <Box>
      {props.data.map((item) => (
        <EventInfo
          key={item.id}
          id={item.id}
          cardId={item.cardId}
          type={item.type}
          userName={item.userName}
          occurrence={item.occurrence}
          device={item.device}
          causes={item.causes}
        />
      ))}
    </Box>
  );
};
