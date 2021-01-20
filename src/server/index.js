import axios from 'axios'
import { CustomError, ServerError } from '@/utils/error';
const SUCCESS_CODE = 200;

export function dataHandler(data, param) {
  console.log(data);
  if (data) {
    if (data.status !== SUCCESS_CODE) {
      return Promise.reject(new CustomError(data.data.msg));
    }
    if (param) {
      return data.data[param] ||  data.data.msg;
    }
    return data.data || data.data.msg;
  }
  return Promise.reject(new ServerError());
}

export function http(options) {
  //创建axios的实例
  const defaultOptions = {
    url: '/',
    method: 'get', 
    timeout: 3000,
  };
  const instance = axios.create({
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
      return res;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return instance(options);
}