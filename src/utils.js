
// AJAX call to retrieve timeline
export function fetchTimeline(getTimeline) {
    let promise = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline', true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                resolve(xhr.responseText);
            }
        };
        xhr.onerror = () => reject(new Error('Error making request to get timeline.'));
        xhr.send();
    });
    const onResolved = (resolvedValue) => {
        getTimeline(JSON.parse(resolvedValue).timeline);
    };
    const onRejected = (error) => {
        console.log(error);
        document.getElementById("timeline").innerHTML = "Unable to retrieve timeline at this time. Check back later.";
    };
    promise.then(onResolved, onRejected);
}
