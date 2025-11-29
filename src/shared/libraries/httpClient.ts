import axios from 'axios';

const httpClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  data: {},
  timeout: 10000,
});

httpClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },

  async function (error) {
    // Check if error caused by request timeout
    if (error.code === 'ECONNABORTED') {
      return Promise.reject('Request timeout');
    }

    if (error.response && error.response.status === 401) {
      return Promise.reject(
        'Sesi Kamu telah habis. Silahkan login kembali untuk menggunakan semua fitur SiCepat Ekspres.',
      );
    }

    return Promise.reject(error);
  },
);

httpClient.interceptors.request.use(
  async config => {
    const newConfig = config;

    return newConfig;
  },
  error => {
    return Promise.reject(error);
  },
);

export {httpClient};
