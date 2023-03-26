import { EventsAPI } from "./types";

export const sortEventsByOccurenceDesc = (data: EventsAPI) => [...data].sort((a, b) =>
    Number(new Date(b.job_event_occurrence)) - Number(new Date(a.job_event_occurrence)))

// TODO log errors to an external system or use an error tracking tool like Sentry
export const logError = (...args: unknown[]) => console.error(args);