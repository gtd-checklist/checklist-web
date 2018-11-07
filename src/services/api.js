import axios from 'axios';

const URL = 'https://checklist.now.sh/api/v1';

export async function getAuthToken(email, password) {
  const res = await axios.post(`${URL}/auth`, { email, password });
  return res.data.token;
}
