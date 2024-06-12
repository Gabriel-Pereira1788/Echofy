import {API_HOST} from '@env';
import axios from 'axios';
export const BASE_URL = API_HOST;
export const api = axios.create({
  baseURL: BASE_URL,
});
