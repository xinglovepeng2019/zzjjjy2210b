import axios from 'axios'
import {showToast} from 'vant'

const instance = axios.create({
  baseURL: 'http://shop_api.chaohua-sxx.cn/',
  timeout: 1000
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let token = localStorage.getItem('MY-TOKEN')
   
    if(token){
        config.headers.token = token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么


    return response.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export {instance}