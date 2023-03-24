import axios from "axios";
import { Events } from "../types";

export const getEvents = (): Promise<Events> => axios.get('events').then((response) => response.data);