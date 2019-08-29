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

<<<<<<< HEAD
// Use JS to dynamically build timeline
=======
>>>>>>> 6dd637ef4b5a1d51f190e6b36ed99386c5db5855
function buildTimeline(responseText) {
	var jsonTimeline = JSON.parse(responseText).timeline;
	console.log(jsonTimeline);
	var timelineDiv = document.getElementById("timeline");

	for (i = 0; i < jsonTimeline.length; i++) {
		post = jsonTimeline[i];

		// TODO: Each tweet message should be clickable, opening a new tab with the tweet on twitter.
		var postLink = document.createElement("a");
		postLink.href = post.url;
		var postDiv = document.createElement("div");

		var imageSpan = document.createElement("span");
		var image = document.createElement("img");
		image.src = post.user.profileImageUrl;
		imageSpan.appendChild(image);

		var timeSpan = document.createElement("span");
		var time = document.createTextNode(new Date(post.createdAt));
		timeSpan.appendChild(time);

		var messageSpan = document.createElement("span");
		var message = document.createTextNode(post.message);
		messageSpan.appendChild(message);

		postDiv.appendChild(imageSpan);
		postDiv.appendChild(timeSpan);
		postDiv.appendChild(messageSpan);
		if (i % 2 == 0) {
			postDiv.style.backgroundColor = "red";
		} else {
			postDiv.style.backgroundColor = "yellow";
		}

		postLink.appendChild(postDiv);
		timelineDiv.appendChild(postLink);

	}
}

<<<<<<< HEAD
// Show timeline on load
getTimeline();
=======
>>>>>>> 6dd637ef4b5a1d51f190e6b36ed99386c5db5855
