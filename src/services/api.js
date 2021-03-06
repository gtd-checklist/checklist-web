/* eslint-disable */

import axios from 'axios';

import { store } from '../../index';

const URL = 'https://checklist.now.sh/api/v1';

const endpoints = {
  auth: `${URL}/auth`,
  habits: `${URL}/habits`,
  review: `${URL}/review`,
  fetchJournal: (month) => `${URL}/journal/${month}`
}

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      store.dispatch({ type: 'UNAUTHORIZED' });
      return axios(originalRequest);
    }

    return Promise.reject(error);
  }
);

export const getAuthToken = async (email, pass) => {
  // const res = await axiosInstance.post(endpoints.auth, { email, pass });
  // return res.data.token;

  return btoa(JSON.stringify({ userId: 'test', expiresIn: Date.now() + 30 * 60 * 1000 }));
};

export const register = async (username, email, pass) => {
  return null;
}

export const fetchHabits = () => {
  return axiosInstance.get(endpoints.habits);
}

export const postNewHabit = (values) => {
  const test = {
    "name": "TEst",
    "description": "testsetst",
    "isNumerical": true,
    "repeat": ["пн", "вт", "пт"]
  }

  return axiosInstance.post(endpoints.habits, values);
}

export const fetchJournal = (month) => {
  return axiosInstance.get(endpoints.fetchJournal(month));
}

export const fetchHabitsReview = () => {
  return axiosInstance.get(endpoints.review);
}

export const postHabitsReview = (values) => {
  return axiosInstance.post(endpoints.review, values);
}