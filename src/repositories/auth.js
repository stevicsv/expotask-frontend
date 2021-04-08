import defaultAxios from 'axios';
import axios from '@/plugins/axios';

// Endpoints
const createSession = () => defaultAxios.get('http://localhost:8080/sanctum/csrf-cookie', { withCredentials: true });
const login = (credentials) => axios.post('auth/login', credentials);
const register = (credentials) => axios.post('auth/register', credentials);
const logout = () => axios.delete('auth/logout');

// Exports
export {
  createSession,
  login,
  register,
  logout,
};
