import { toast } from 'react-toastify';
import users from 'constants/api/users';

import axios, { setAuthorizationHeader } from './index';

export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      const originalRequest = error.config;
      if (error.response.status === 500) {
        message = 'Something went terribly wrong';
      } else if (error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;
        const session = localStorage.getItem('BWAMICRO:token')
          ? JSON.parse(localStorage.getItem('BWAMICRO:token'))
          : null;

        return users
          .refresh({
            refresh_token: session?.refresh_token,
            email: session?.email,
          })
          .then((res) => {
            if (res.data) {
              setAuthorizationHeader(res.data);
              localStorage.setItem(
                'BWAMICRO:token',
                JSON.stringify({
                  ...session,
                  token: res.data,
                })
              );

              originalRequest.headers.authorization = res.data;

              return axios(originalRequest);
            } else {
              window.location.href = '/login';
              localStorage.removeItem('BWAMICRO:token');
            }
          });
      } else {
        message = error.response.data.message;
      }

      if (typeof message === 'string') toast.error(message);

      return Promise.reject(error);
    }
  }
}
