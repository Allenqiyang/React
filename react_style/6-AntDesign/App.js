import React, { PureComponent } from 'react'

import moment from 'moment'


import { Button, Space, DatePicker, Switch } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

export default class App extends PureComponent {
  render() {
    const loadings = true, enterLoading = true
    return (
      <>
        <Space style={{ width: '100%' }}>
          <Button type="primary" loading>
            Loading
          </Button>
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <Button type="primary" icon={<PoweroffOutlined />} loading />
        </Space>

        <Space style={{ width: '100%' }}>
          <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => enterLoading(1)}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
          />
          <DatePicker defaultValue={moment('2015-06-06', "YYYY-MM-DD")} allowClear={false} />
        </Space>
        <hr/>
        <Switch defaultChecked onChange={onChange} />
      </>
    )

    function onChange(checked) {
      console.log(`switch to ${checked}`)
    }
  }

  onChange(checked) {
    console.log(`switch to ${checked}`)
  }
}
