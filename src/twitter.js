import ReactDOM from "react-dom";
import React from "react";
import Timeline from "./js/components/Timeline.jsx";

require('./scss/twitter.scss');

// AJAX request for timeline
var getTimeline = () => {
  	let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline', true);
	xhr.onreadystatechange = () => {
		if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			let jsonTimeline = JSON.parse(xhr.responseText).timeline;
			ReactDOM.render(<Timeline timeline={jsonTimeline} />, document.getElementById("timeline-div"));	
		}
	};
	xhr.onerror = () => {
    	console.log('Error making request to get timeline.');
		document.getElementById("timeline").innerHTML = "Unable to retrieve timeline at this time. Check back later.";
  	};
	xhr.send();
}

window.onload = () => {
	getTimeline();
	document.getElementById("timeline-button").onClick = getTimeline();
}
