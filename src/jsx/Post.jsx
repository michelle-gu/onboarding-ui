import React, { Component } from "react";

const options = { month: 'short', day: 'numeric' };

class Post extends Component {

    constructor(props) {
      super(props);

      this.createdAt = new Date(this.props.createdAt).toLocaleDateString("en-US", options);
    }

    render() {
      return (
        <div className="post">
          <div className="user">
            <img id="profile-img" src={this.props.profileImageUrl}></img>
            <span className="name">{this.props.name}</span>
            <span className="name small-text">{this.props.twitterHandle}</span>
          </div>

          <a className="link" href={this.props.url} target="_blank">
            <div className="tweet">
              <div className="date small-text">{this.createdAt}</div>
              <div>{this.props.message}</div>
            </div>
          </a>
        </div>
      );
    }

}

export default Post;
