import axios from "axios";
import { QueryObserverOptions, QueryOptions, useQuery, UseQueryResult } from "react-query";
import { Events } from "../types";

const KEY_EVENTS = 'KEY_EVENTS';

export const getEvents = (): Promise<Events> => axios.get('events').then((response) => response.data);

type Select = QueryObserverOptions<Events, unknown>['select']
export type UseGetEvents = ({ select }: Readonly<{ select: Select }>) => UseQueryResult<Events, unknown>;
export const useGetEvents: UseGetEvents = ({ select }) => useQuery([KEY_EVENTS], getEvents, { select });