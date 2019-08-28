// AJAX request for timeline
function getTimeline() {
  	var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'http://localhost:8080/api/1.0/twitter/timeline', true);
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("timeline").innerHTML = this.responseText;
		}
	};
	xhttp.onerror = function() {
    	console.log('Error making request to get timeline.');
  	};
	xhttp.send();
}
