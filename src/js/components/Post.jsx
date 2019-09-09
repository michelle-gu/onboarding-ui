import React, { Component } from "react";
import ReactDOM from "react-dom";

class Post extends Component {

  	constructor() {
    	super();
  	}

    getCreatedAt() {
      let options = { month: 'short', day: 'numeric' };
      let createdAt  = new Date(this.props.createdAt);
      return createdAt.toLocaleDateString("en-US", options);
    }

  	render() {
    	return (
    		<div className="user">
    			<img id="profile-img" src={this.props.profileImgUrl}></img>
    			<span className="name">{this.props.name}</span>
    			<span className="name small-text">{this.props.twitterHandle}</span>
    		</div>

        <a>
      		<div className="tweet">
      			<div className="date small-text">{this.getCreatedAt()}</div>
      			<div>{this.props.message}</div>
      		</div>
        </a>
    	);
  	}

}

Post.defaultProps = {
	profileImgUrl: "",
  	name: "name",
  	twitterHandle: "twitterHandle",
};

export default Post;
