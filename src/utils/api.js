import axios from 'axios';

export const generateHeaders = accessToken => ({
  headers: {
    Authorization: `bearer ${accessToken}`,
    'content-type': 'application/json',
  }
});

export const instance = axios.create({
  baseURL: '',
  timeout: 5000,
});

const cancelable = {};
export const createCancel = key => {
  const source = axios
    .CancelToken
    .source();
  if (key) {
    cancelable[key] = source.cancel;
    return source.token;
  }
  return source;
};

export const doCancel = (key, message) => {
  const cancel = cancelable[key];
  if (cancel) {
    cancel(message);
  }
};

export const { isCancel } = axios;
