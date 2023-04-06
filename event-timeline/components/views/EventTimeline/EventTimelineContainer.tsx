import { EventsAPI, ResponseEventsAPI } from "@/api/types";
import { useGetEvents } from "@/api/useGetEvents/useGetEvents";
import { ErrorMessage } from "@/components/commons/ErrorMessage/ErrorMessage";
import { CircularProgress } from "@mui/material";
import React from "react";
import { EventTimeline } from "./EventTimeline";
import { tranformResponseApiToUiData } from "./transform";
import { EventsInfoUI } from "./types";

export const DEFAULT_PAGE = 1;
export const EVENTS_PER_PAGE = 10;

const transform = (data: ResponseEventsAPI): EventsInfoUI => ({
  countEvents: data.countEvents,
  events: tranformResponseApiToUiData(data.events),
});

export const EventTimelineContainer = () => {
  const [page, setPage] = React.useState(DEFAULT_PAGE);
  const { data, isLoading, error } = useGetEvents<EventsInfoUI>({
    page,
    limit: EVENTS_PER_PAGE,
    transform,
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
