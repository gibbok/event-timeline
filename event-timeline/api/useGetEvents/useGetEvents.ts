import { EventsUI } from "@/pages/transform";
import axios from "axios";
import { QueryObserverOptions, QueryOptions, useQuery, UseQueryResult } from "react-query";
import { EventsAPI } from "../types";

const KEY_EVENTS = 'KEY_EVENTS';

export const getEvents = (): Promise<EventsAPI> => axios.get('events').then((response) => response.data);

export type UseGetEvents = (cb: (x: EventsAPI) => EventsUI) => UseQueryResult<EventsUI, unknown>;
export const useGetEvents: UseGetEvents = (cb) => useQuery([KEY_EVENTS], getEvents, { select: cb });