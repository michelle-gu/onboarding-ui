// AJAX request for timeline
function getTimeline() {
	console.log("caling getTimeline")
  	var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline', true);
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
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
	console.log(jsonTimeline);
	var timelineDiv = document.getElementById("timeline");

	for (i = 0; i < jsonTimeline.length; i++) {
		post = jsonTimeline[i];

		var postDiv = document.createElement("div");

		var imageSpan = document.createElement("span");
		var image = document.createElement("img");
		image.src = post.user.profileImageUrl;

		var messageSpan = document.createElement("span");
		var message = document.createTextNode(new Date(post.createdAt) + ' ' + post.message);
		imageSpan.appendChild(image);
		messageSpan.appendChild(message);
		postDiv.appendChild(imageSpan);
		postDiv.appendChild(messageSpan);
		if (i % 2 == 0) {
			postDiv.style.backgroundColor = "gray";
		} else {
			postDiv.style.backgroundColor = "lightgray";
		}

		timelineDiv.appendChild(postDiv);

	}
}

// Show timeline on load
getTimeline();
