import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: this.props.contents
    }
  }

  render() {
    const contents = this.state.contents.map((content, index) => {
      if(content.type === "heading") {
        return (<h1 key={index}>{content.value}</h1>)
      }
      if(content.type === "text") {
        return (<p key={index}>{content.value}</p>)
      }
      if(content.type === "image") {
        return (<img key={index} src={content.value} alt="" />)
      }
    })
    return (
      <div className="post">{contents}</div>
    )
  }
}

export default Post;