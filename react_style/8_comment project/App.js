import React, { PureComponent } from 'react'
import CommentInput from './components/CommentInput'
import CommentItem from './components/CommentItem'

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      commentList: []
    }
  }
  
  render() {
    return (
      <div style={{width: "500px", padding: "20px"}}>
        {
          this.state.commentList.map((comment, index) => {
            return <CommentItem key={comment.id} comment={comment} delete={() => this.deleteComment(index)}/>
          })
        }
        <CommentInput submitComment={info => this.getComment(info)}/>
      </div>
    )
  }

  getComment(info) {
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }

  deleteComment(index) {
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index, 1)
    this.setState({
      commentList: newCommentList
    })
  }
}
