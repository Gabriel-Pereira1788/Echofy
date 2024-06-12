import {API_HOST} from '@env';
import axios from 'axios';

export const BASE_URL = API_HOST ? API_HOST : 'http://localhost:3000/';

export const api = axios.create({
  baseURL: BASE_URL,
});
