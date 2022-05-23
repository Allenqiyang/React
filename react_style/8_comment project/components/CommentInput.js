import React, { PureComponent } from 'react'
import moment from 'moment'

import { Input, Button } from 'antd'

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      content: ""
    }
  }

  render() {
    return (
      <div>
        <Input.TextArea rows={4} value={this.state.content} onChange={e => this.handleChange(e)}/>
        <hr/>
        <Button type="primary" onClick={() => this.addComment()}>Post comment</Button>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  addComment() {
    const commentInfo = {
      id: moment().valueOf(),    // Date.now()
      avatar: "https://img0.baidu.com/it/u=3251072707,2675697439&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=549",
      nickname: "Allen",
      dateTime: moment(),
      content: this.state.content
    }

    this.props.submitComment(commentInfo)

    this.setState({
      content: ""
    })
  }
}
