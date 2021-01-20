import axios from 'axios'

export function http(config) {
  //创建axios的实例
  const instance = axios.create({
    // baseURL: "http://106.54.54.237:8000/api/w1",
    baseURL: "http://123.207.32.32:8000/api/w1",
    timeout: 5000
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
      return Promise.reject(error)
    }
  );

  return instance(config);
}