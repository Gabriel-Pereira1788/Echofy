// import {API_HOST} from '@env';
import axios from 'axios';
export const BASE_URL = 'http://192.168.1.101:3000/';
export const api = axios.create({
  baseURL: BASE_URL,
});
