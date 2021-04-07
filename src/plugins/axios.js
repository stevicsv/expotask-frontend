import axios from 'axios';
import router from '@/router';

const API_VERSION = 'v1';
const BASE_URL = `http://localhost:8080/api/${API_VERSION}`;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthenticated response status from request.
    if (error.response.status === 401) {
      localStorage.removeItem('user');
      router.push({ name: 'Login' });
    }

    return Promise.reject(error.response.data);
  },
);

export default instance;
