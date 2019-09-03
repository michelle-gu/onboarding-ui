// AJAX request for timeline
function getTimeline() {
  	var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline', true);
	xhr.onreadystatechange = function() {
		if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
			buildTimeline(this.responseText);
		}
	};
	xhr.onerror = function() {
    	console.log('Error making request to get timeline.');
		document.getElementById("timeline").innerHTML = "Unable to retrieve timeline at this time. Check back later.";
  	};
	xhr.send();
}

// Use JS to dynamically build timeline
function buildTimeline(responseText) {
	var jsonTimeline = JSON.parse(responseText).timeline;
	var timelineDiv = document.getElementById("timeline");
	timelineDiv.innerHTML = "";

	for (var i = 0; i < jsonTimeline.length; i++) {
		var post = jsonTimeline[i];

		// Create user info part of post
		var userDiv = document.createElement("div");
		userDiv.className = "user"

		var image = document.createElement("img");
		image.id = "profile-img";
		image.src = post.user.profileImageUrl;

		var nameSpan = document.createElement("span");
		nameSpan.className = "name";
		var name = document.createTextNode(post.user.name);
		nameSpan.appendChild(name);

		var screenNameSpan = document.createElement("span");
		screenNameSpan.className = "name small-text";
		var screenName = document.createTextNode(post.user.twitterHandle);
		screenNameSpan.appendChild(screenName);

		userDiv.appendChild(image);
		userDiv.appendChild(nameSpan);
		userDiv.appendChild(screenNameSpan);

		// Create tweet info part of post
		var tweetDiv = document.createElement("div");
		tweetDiv.className = "tweet"

		var timeDiv = document.createElement("div");
		timeDiv.className = "date small-text";
		var options = { month: 'short', day: 'numeric' };
		var createdAt  = new Date(post.createdAt);
		var time = document.createTextNode(createdAt.toLocaleDateString("en-US", options));
		timeDiv.appendChild(time);

		var messageDiv = document.createElement("div");
		var message = document.createTextNode(post.message);
		messageDiv.appendChild(message);

		tweetDiv.appendChild(timeDiv);
		tweetDiv.appendChild(messageDiv);

		// Link tweet to twitter
		var tweetLink = document.createElement("a");
		tweetLink.href = post.url;
		tweetLink.target = "_blank"
		tweetLink.appendChild(tweetDiv);

		// Create post
		var postDiv = document.createElement("div");
		postDiv.className = "post"
		postDiv.appendChild(userDiv);
		postDiv.appendChild(tweetLink);

		// Add post to timeline
		timelineDiv.appendChild(postDiv);
	}
}

window.onload = function () {
	getTimeline();
	document.getElementById("timeline-button").onClick = getTimeline();
}

