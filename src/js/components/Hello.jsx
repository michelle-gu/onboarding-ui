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

ReactDOM.render(<Hello />, document.getElementById("hello-react"));
