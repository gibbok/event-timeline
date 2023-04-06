import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { ResponseEventsAPI } from "../types";

export const QUERY_KEY_EVENTS = 'QUERY_KEY_EVENTS';

export const getEvents = (page: number, limit: number): Promise<ResponseEventsAPI> => axios.get(`events?page=${page}&limit=${limit}`).then((response) => response.data);

export const useGetEvents = <R,>({ page, limit, transform }: Readonly<{
    page: number,
    limit: number
    transform: (response: ResponseEventsAPI) => R
}>): UseQueryResult<R, unknown> => useQuery([QUERY_KEY_EVENTS, page], () => getEvents(page, limit), { select: transform, keepPreviousData: true });