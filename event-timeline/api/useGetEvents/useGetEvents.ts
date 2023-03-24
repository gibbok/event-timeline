import { EventsUI } from "@/pages/transform";
import axios from "axios";
import { QueryObserverOptions, QueryOptions, useQuery, UseQueryResult } from "react-query";
import { EventsAPI } from "../types";

const KEY_EVENTS = 'KEY_EVENTS';

export const getEvents = (): Promise<EventsAPI> => axios.get('events').then((response) => response.data);

export const useGetEvents = <R,>({ transform }: Readonly<{ transform: (response: EventsAPI) => R }>): UseQueryResult<R, unknown> => useQuery([KEY_EVENTS], getEvents, { select: transform });