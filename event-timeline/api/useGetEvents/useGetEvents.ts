import axios from "axios";
import { QueryObserverOptions, QueryOptions, useQuery, UseQueryResult } from "react-query";
import { EventsAPI } from "../types";

const KEY_EVENTS = 'KEY_EVENTS';

export const getEvents = (): Promise<EventsAPI> => axios.get('events').then((response) => response.data);

type Select = QueryObserverOptions<EventsAPI, unknown>['select']
export type UseGetEvents = ({ select }: Readonly<{ select: Select }>) => UseQueryResult<EventsAPI, unknown>;
export const useGetEvents: UseGetEvents = ({ select }) => useQuery([KEY_EVENTS], getEvents, { select });