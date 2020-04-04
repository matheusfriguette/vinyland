import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:3100',
});

export default api;
