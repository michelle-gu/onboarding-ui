import React, { Component } from "react";
import ReactDOM from "react-dom";
import Post from "./Post.jsx";

class Timeline extends Component {

  	constructor() {
    	super();
  	}

  	render() {
    	return (
      		<Post></Post>
    	);
  	}

}

export default Timeline;

ReactDOM.render(<Timeline />, document.getElementById("timeline-div"));
