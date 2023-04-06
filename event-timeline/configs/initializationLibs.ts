import axios from 'axios';
import { API_BASE_URL } from './app';
import { isBrowser } from '@/utils/others';

export const initialize = () => {
  axios.defaults.baseURL = isBrowser() ? API_BASE_URL : process.env.BASE_URL + API_BASE_URL;
};
