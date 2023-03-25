import axios from 'axios';
import { API_BASE_URL } from './app';

export const initialize = () => {
  axios.defaults.baseURL = API_BASE_URL;
};