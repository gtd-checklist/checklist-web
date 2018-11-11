import axios from 'axios';

import { store } from '../index';
import { UNAUTHORIZED } from './reponseStatus/actions';

const URL = 'https://checklist.now.sh/api/v1';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(response => response, (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401) {
    store.dispatch({ type: UNAUTHORIZED });
    return axios(originalRequest);
  }
  return Promise.reject(error);
});

export async function getAuthToken(email, password) {
  const res = await axiosInstance.post(`${URL}/auth`, { email, password });
  return res.data.token;
}

export default axiosInstance;
