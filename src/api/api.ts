import axios from 'axios';

export const BASE_URL = 'http://192.168.1.102:3000/';
export const api = axios.create({
  baseURL: BASE_URL,
});
