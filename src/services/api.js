/* eslint-disable */

import axios from 'axios';

import { store } from '../../index';
import { UNAUTHORIZED } from './reponseStatus/actions';

const URL = 'https://checklist.now.sh/api/v1';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      store.dispatch({ type: UNAUTHORIZED });
      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);

export const getAuthToken = async (email, pass) => {
  // const res = await axiosInstance.post(`${URL}/auth`, { email, pass });
  // return res.data.token;

  return btoa(JSON.stringify({ userId: 'test', expiresIn: Date.now() + 30 * 60 * 1000 }));
};

export const register = async (username, email, pass) => {
  return null;
}

export default axiosInstance;
