import axios from 'axios'

export function http(options) {
  //创建axios的实例
  const defaultOptions = {
    timeout: 5000,
  };
  const instance = axios.create({
    // baseURL: "http://123.207.32.32:8000/api/w1",
    // timeout: 5000
    ...defaultOptions,
  });

  //axios的拦截器
  instance.interceptors.request.use(
    config => {
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    res => {
      console.log(res);
      return res.data;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance(options);
}