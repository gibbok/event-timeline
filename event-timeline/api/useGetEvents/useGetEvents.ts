import axios from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { Events } from "../types";

const KEY_EVENTS = 'KEY_EVENTS';

export const getEvents = (): Promise<Events> => axios.get('events').then((response) => response.data);

export type UseGetEvents = () => UseQueryResult<Events, unknown>;
export const useGetEvents: UseGetEvents = () => useQuery([KEY_EVENTS], getEvents);