import React, { PureComponent } from 'react'

import { Comment, Avatar, Tooltip } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

export default class CommentItem extends PureComponent {
  render() {
    const { avatar, nickname, content, dateTime } = this.props.comment
    return (
      <Comment
        author={<a href="/#">{nickname}</a>}
        avatar={<Avatar src={avatar} alt={nickname} />}
        content={<p>{content}</p>}
        datetime={
          <Tooltip title={dateTime.format("YYYY-MM-DD HH:mm")}>
            <span>{dateTime.fromNow()}</span>
          </Tooltip>
        }
        actions={[
          <span onClick={() => this.removeComment()}><DeleteOutlined />delete</span>
        ]}
      />
    )
  }

  removeComment() {
    this.props.delete()
  }
}
