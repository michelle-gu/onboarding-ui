// import Timeline from "./js/components/Timeline.jsx";
require('./scss/twitter.scss');

// AJAX request for timeline
function getTimeline() {
  	let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline', true);
	xhr.onreadystatechange = () => {
		if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			buildTimeline(xhr.responseText);
		}
	};
	xhr.onerror = () => {
    	console.log('Error making request to get timeline.');
		document.getElementById("timeline").innerHTML = "Unable to retrieve timeline at this time. Check back later.";
  	};
	xhr.send();
}

// Use JS to dynamically build timeline
function buildTimeline(responseText) {
	let jsonTimeline = JSON.parse(responseText).timeline;
	let timelineDiv = document.getElementById("timeline");
	timelineDiv.innerHTML = "";

	for (let i = 0; i < jsonTimeline.length; i++) {
		let post = jsonTimeline[i];

		// Create user info part of post
		// let userDiv = document.createElement("div");
		// userDiv.className = "user"

		// let image = document.createElement("img");
		// image.id = "profile-img";
		image.src = post.user.profileImageUrl;

		// let nameSpan = document.createElement("span");
		// nameSpan.className = "name";
		let name = document.createTextNode(post.user.name);
		// nameSpan.appendChild(name);

		// let screenNameSpan = document.createElement("span");
		// screenNameSpan.className = "name small-text";
		let screenName = document.createTextNode(post.user.twitterHandle);
		// screenNameSpan.appendChild(screenName);

		// userDiv.appendChild(image);
		// userDiv.appendChild(nameSpan);
		// userDiv.appendChild(screenNameSpan);

		// Create tweet info part of post
		// let tweetDiv = document.createElement("div");
		// tweetDiv.className = "tweet"

		// let timeDiv = document.createElement("div");
		// timeDiv.className = "date small-text";
		// let options = { month: 'short', day: 'numeric' };
		let createdAt  = new Date(post.createdAt);
		// let time = document.createTextNode(createdAt.toLocaleDateString("en-US", options));
		// timeDiv.appendChild(time);

		// let messageDiv = document.createElement("div");
		let message = document.createTextNode(post.message);
		// messageDiv.appendChild(message);

		// tweetDiv.appendChild(timeDiv);
		// tweetDiv.appendChild(messageDiv);

		// Link tweet to twitter
		let tweetLink = document.createElement("a");
		tweetLink.className = "link"
		tweetLink.href = post.url;
		tweetLink.target = "_blank"
		tweetLink.appendChild(tweetDiv);

		// Create post
		let postDiv = document.createElement("div");
		postDiv.className = "post"
		postDiv.appendChild(userDiv);
		postDiv.appendChild(tweetLink);

		// Add post to timeline
		timelineDiv.appendChild(postDiv);
	}
}

window.onload = () => {
	getTimeline();
	document.getElementById("timeline-button").onClick = getTimeline();
}
