import axios from 'axios';
import { API_BASE_URL } from './app';

import getConfig from 'next/config';

export const initialize = () => {
  axios.defaults.baseURL = 'http://localhost:3000/api/';
};