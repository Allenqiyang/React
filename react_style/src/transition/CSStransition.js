import React, { PureComponent } from 'react'

import { CSSTransition } from 'react-transition-group'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default class CSStransition extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true
    }
  }
  render() {
    const {isShow} = this.state
    return (
      <div>
        <button onClick={() => {this.setState({isShow: !isShow})}}>show/hide</button>
        <CSSTransition in={isShow} classNames="card">
          <Card
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title="Card title"
              description="This is the description"
            />
          </Card>
        </CSSTransition>
      </div>
    )
  }
}
