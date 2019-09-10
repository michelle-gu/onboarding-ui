import React, { Component } from "react";
import Post from "./Post.jsx";

class Timeline extends Component {

    constructor() {
      super();
    }

    generatePosts() {
      return this.props.timeline.map((post, index) => {
        let options = { month: 'short', day: 'numeric' };
        let createdAt  = new Date(post.createdAt).toLocaleDateString("en-US", options);
        return <Post key={index}
                     profileImageUrl={post.user.profileImageUrl}
                     name={post.user.name}
                     twitterHandle={post.user.twitterHandle}
                     createdAt={createdAt}
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
