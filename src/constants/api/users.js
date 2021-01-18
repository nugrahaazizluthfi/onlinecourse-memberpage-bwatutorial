import axios from 'configs/axios';

export default {
  login: (credentials) => axios.post('/users/login', credentials),
  register: (payload) => axios.post('/users/register', payload),
  details: () => axios.get('/users'),
  refresh: (credentials) =>
    axios.post('refresh-token', {
      refresh_token: credentials.refresh_token,
      email: credentials.email,
    }),
  update: (data) => axios.put('/users', data),
  logout: () => axios.post('/users/logout'),
};
