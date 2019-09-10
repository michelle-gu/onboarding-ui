import React, { Component } from 'react';
import Timeline from "./jsx/Timeline.jsx";

class App extends Component {

	constructor() {
		super();
	    this.state = {
	      timeline: [],
	    };
	}

	getTimeline() {
	  	let xhr = new XMLHttpRequest();
	    xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline', true);
		xhr.onreadystatechange = () => {
			if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
				let jsonTimeline = JSON.parse(xhr.responseText).timeline;
			    this.setState(() => {
			      return { timeline: jsonTimeline};
			    });
			}
		};
		xhr.onerror = () => {
	    	console.log('Error making request to get timeline.');
			document.getElementById("timeline").innerHTML = "Unable to retrieve timeline at this time. Check back later.";
	  	};
		xhr.send();
	}

	componentDidMount() {
		this.getTimeline();
	}
  
	render() {
		return (
			<div className="App">
				<header className="App-header title">Lab for Mich</header>

		        <div id="timeline-button-div">
		            <button id="timeline-button" className="button" type="button" onClick={() => this.getTimeline()}>Get Timeline</button>
		        </div>

		        <div id="timeline-div">
		        	<Timeline timeline={this.state.timeline} />
		        </div>
			</div>
		);
	}

}

export default App;
