// 二次封装axios
import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
  // 1. 发送网络请求时，在界面中间显示Loading组件
  // 2. 某一些请求需要token，若没有就跳转到登录页面
  // 3. params/data序列化的操作
  console.log("request intercept")
  return config
}, err => {

})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  // 这里是服务器响应错误的时候的回调
  if(err && err.response) {
    switch(err.response.status) {
      case 400: 
        console.log("wrong")
        break
      case 404: 
        console.log("error")
        break
      default:
        console.log("other error")
    }
  }
  return err
})

export default instance