import { EventsUI } from "@/pages/transform";
import axios from "axios";
import { QueryObserverOptions, QueryOptions, useQuery, UseQueryResult } from "react-query";
import { EventsAPI, ResponseEventsAPI } from "../types";

const KEY_EVENTS = 'KEY_EVENTS';

export const getEvents = (page: number, limit: number): Promise<ResponseEventsAPI> => axios.get(`events?page=${page}&limit=${limit}`).then((response) => response.data);

export const useGetEvents = <R,>({ page, limit, transform }: Readonly<{
    page: number,
    limit: number
    transform: (response: ResponseEventsAPI) => R
}>): UseQueryResult<R, unknown> => useQuery([KEY_EVENTS, page], () => getEvents(page, limit), { select: transform, keepPreviousData: true });