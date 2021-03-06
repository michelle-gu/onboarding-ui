
// AJAX call to retrieve timeline
export function fetchTimeline() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline', true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText).timeline);
            }
        };
        xhr.onerror = () => reject(new Error('Error making request to get timeline.'));
        xhr.send();
    });
}

export function fetchUserTimeline() {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/user-timeline', true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText).timeline);
            }
        };
        xhr.onerror = () => reject(new Error('Error making request to get timeline.'));
        xhr.send();
    });
}

export function fetchFilteredTimeline(keyword) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline/filter?keyword=' + keyword, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText).timeline);
            }
        };
        xhr.onerror = () => reject(new Error('Error making request to get timeline.'));
        xhr.send();
    });
}

export function postTweet(message) {
    let body = {
                  "message": message,
               };
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/1.0/twitter/tweet', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                resolve(JSON.parse(xhr.responseText).timeline);
            }
        };
        xhr.onerror = () => reject(new Error('Error making request to get timeline.'));
        xhr.send(JSON.stringify(body));
    });
}
