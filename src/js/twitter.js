// AJAX request for timeline
function getTimeline() {
  	var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline', true);
	xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("timeline").innerHTML = this.responseText;
		}
	};
	xhr.onerror = function() {
    	console.log('Error making request to get timeline.');
  	};
	xhr.send();
}

// http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html