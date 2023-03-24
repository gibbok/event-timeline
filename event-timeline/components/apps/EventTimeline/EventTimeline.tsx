import { EventsUI } from "@/pages/transform";
import { Box, CircularProgress, Grid, Pagination, Paper } from "@mui/material";
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
    <>
      <Grid container gap={2} mb={12}>
        {props.data.map((item) => (
          <Grid key={item.eventId} item xs={12}>
            <EventInfo
              eventId={item.eventId}
              cardId={item.cardId}
              type={item.type}
              userName={item.userName}
              occurrence={item.occurrence}
              device={item.device}
              causes={item.causes}
              jobHeadcount={item.jobHeadcount}
            />
          </Grid>
        ))}
      </Grid>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <Box p={2} display="flex" justifyContent="center">
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Box>
      </Paper>
    </>
  );
};
