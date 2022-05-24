import React from "react"
import ReactDOM from 'react-dom'

import axios from 'axios'

import App from './App'

// 在这里写是默认配置
axios.defaults.baseURL = "https://httpbin.org"
axios.defaults.timeout = 5000
axios.defaults.headers.common["token"] = "yeahthisistoken"
axios.defaults.headers.post["Content-Type"] = "application/json"

ReactDOM.render(<App/>, document.getElementById('root'))