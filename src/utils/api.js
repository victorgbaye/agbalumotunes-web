// src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'https://agbalumotunes-server.onrender.com/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
//   timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Add other headers here
  }
});


export default api;
