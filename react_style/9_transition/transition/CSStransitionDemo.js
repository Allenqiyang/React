import React, { PureComponent } from 'react'

import { CSSTransition } from 'react-transition-group'
import './CSStransition.css'

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default class CSStransitionDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isShow: true
    }
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <button onClick={() => {this.setState({ isShow: !isShow })}}>show/hide</button>
        <CSSTransition
          in={isShow}
          classNames="card"
          timeout={1000}    // 这个timeout是类添加的时间以及元素创建卸载的时间，动画的执行时间是CSS里面写的时间
          unmountOnExit={true}
          appear
          // 传过来的el就是CSSTransition包裹的元素
          onEnter={el => console.log('开始进入')}
          onEntering={el => console.log('进入中')}
          onEntered={el => console.log('进入完成')}
          onExit={el => console.log('开始退出')}
          onExiting={el => console.log('退出中')}
          onExited={el => console.log('退出完成')}
        >
          <Card
            style={{
              width: 300,
              margin: 'auto'
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
