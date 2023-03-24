import { EventsUI } from "@/pages/transform";
import {
  Box,
  CircularProgress,
  Grid,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { EventInfo } from "./EventInfo";

type EventTimelineLoading = Readonly<{
  status: "loading";
}>;

type EventTimelineLoaded = Readonly<{
  status: "loaded";
  data: EventsUI;
  page: number;
  countPages: number;
  onChangePage: (page: number) => void;
}>;

type EventTimelineProps = EventTimelineLoading | EventTimelineLoaded;

export const EventTimeline = (props: EventTimelineProps) => {
  if (props.status === "loading") {
    return <CircularProgress />;
  }

  if (props.data.length === 0) {
    return <Typography>No data</Typography>;
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
          <Pagination
            page={props.page}
            count={props.countPages}
            variant="outlined"
            shape="rounded"
            onChange={(_ev, page) => props.onChangePage(page)}
          />
        </Box>
      </Paper>
    </>
  );
};
