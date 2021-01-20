import Vue from 'vue';

export class CustomError extends Error {
  constructor(message, error) {
    super(message);
    this.error = error;
  }
}

export class ServerError extends CustomError {
  constructor(error) {
    super('服务器错误，请稍后重试', error);
  }
}

export class OSSFetchError extends CustomError {
  constructor(error) {
    super('资源获取失败', error);
  }
}

export const globalErrorHandler = (err) => {
  console.log(err);
  if (err instanceof CustomError) {
    // 自定义错误已处理过，直接显示错误信息
    Vue.nextTick(() => console.log(err.message));
  }  else {
    console.log(err);
    // Vue.nextTick(() => Toast('未知错误，请稍后重试'));
  }
};
