import axios from 'axios';
import { API_BASE_URL } from './app';

export const initApp = () => {
  axios.defaults.baseURL = API_BASE_URL;
};