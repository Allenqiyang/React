import axios from 'axios'
import React, { PureComponent } from 'react'

// import axios from 'axios'
import request from './service/request'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  async componentDidMount() {
    // 正常使用axios
    // axios({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     name: "Allen",
    //     age: 18
    //   },
    //   method: "GET"
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.error(err)
    // })

    // axios({
    //   url: "http://httpbin.org/post",
    //   data: {
    //     name: "Tony",
    //     age: 15
    //   },
    //   method: "POST"
    // }).then(res => {
    //   console.log(res)
    // }, err => {
    //   console.error(err)
    // })

    // async await用法
    // try {
    //   const result = await axios.get("http://httpbin.org/get", {
    //     params: {
    //       name: "Tom",
    //       age: 14
    //     }
    //   })
    //   console.log(result)
    //   // 把console.log函数作为参数传给then，把res作为参数去执行console.log
    // } catch (error) {
    //   console.error(error)
    // }

    // axios.post("http://httpbin.org/post", {
    //   name: "Jerry",
    //   age:8
    // }).then(console.log)

    // axios.all()
    // const request1 = axios({
    //   url: "http://httpbin.org/get",
    //   params: {
    //     name: "Allen",
    //     age: 18
    //   }
    // })

    // const request2 = axios({
    //   url: "http://httpbin.org/post",
    //   data: {
    //     name: "Tony",
    //     age: 15
    //   },
    //   method: "POST"
    // })

    // axios.all([request1, request2]).then(([res1, res2]) => {    // 解构赋值
    //   console.log(res1, res2)
    // }).catch(err => {
    //   console.error(err)
    // })

    // 还可以创建多个axios实例，这里也可以配置(优先级高于默认配置)
    // const instance1 = axios.create({
    //   baseURL: 'http://httpbin.org',
    //   timeout: 5000,
    //   headers: {

    //   }
    // })

    // const instance2 = axios.create({
    //   baseURL: 'http://baidu.xyz',
    //   timeout: 5000,
    //   headers: {
        
    //   }
    // })

    // 请求和响应拦截
    axios.interceptors.request.use(config => {
      // 1. 发送网络请求时，在界面中间显示Loading组件
      // 2. 某一些请求需要token，若没有就跳转到登录页面
      // 3. params/data序列化的操作
      console.log("request intercept")
      return config
    }, err => {

    })

    axios.interceptors.response.use(res => {
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

    // axios.get("https://httpbin.org/get", {
    //   params: {
    //     name: "Allen",
    //     age: 18
    //   }
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.error(err)
    // })

    request({
      url: "http://httpbin.org/get",
      params: {
        name: "Allen",
        age: 18
      }
    }).then(console.log)
  }

  render() {
    return (
      <div>App</div>
    )
  }
}
