import React, { Component } from "react";
import Post from "./Post.jsx";

class Timeline extends Component {

    constructor() {
      super();
    }

    generatePosts() {
      return this.props.timeline.map((post, index) => {
        return <Post key={index}
                     profileImageUrl={post.user.profileImageUrl}
                     name={post.user.name}
                     twitterHandle={post.user.twitterHandle}
                     createdAt={post.createdAt}
                     message={post.message}
                     url={post.url} />;
      });
    }

    render() {
      return (
        <div id="timeline">
          {this.generatePosts()}
        </div>
      );
    }

}

export default Timeline;
