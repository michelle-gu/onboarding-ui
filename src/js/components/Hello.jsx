import React, { Component } from "react";
import ReactDOM from "react-dom";

class Hello extends Component {

  	constructor() {
    	super();
  	}

  	render() {
    	return (
      		<h1 id="hello-react-para">hello react!</h1>
    	);
  	}

}

export default Hello;

const hello = document.getElementById("hello-react");
hello ? ReactDOM.render(<Hello />, hello) : false;
