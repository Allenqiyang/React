import React from 'react'
import ReactDOM from 'react-dom'

// 要将antd全局样式引入
import 'antd/dist/antd.css'
// import 'antd/dist/antd.less'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
)