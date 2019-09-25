import { fetchTimeline, fetchUserTimeline } from '../utils.js';

const exampleResponseText = JSON.stringify([{   
        "message": "Hello",
        "user": {
            "twitterHandle": "myHandle",
            "name": "myName",
            "profileImageUrl": "http://pbs.twimg.com/profile_images/0/my_photo.jpg"
        },
        "createdAt": 1568236459000,
        "url": "https://twitter.com/myHandle/status/0"
    }]);

let open, send, status, onload, setRequestHeader, response;
function createXHRmock() {
    open = jest.fn();
    status = 200;
    response = exampleResponseText;
    send = jest.fn();

    const xhrMockClass = function () {
        return {
            open,
            send,
            status,
            setRequestHeader,
            response
        };
    };

    window.XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
}

describe('Utils', () => {

    it('fetch timeline success', () => {
        createXHRmock();
        fetchTimeline();
        expect(open).toBeCalledWith('GET', 'http://127.0.0.1:8080/api/1.0/twitter/timeline', true);
        expect(send).toBeCalled();
    });

    it('fetch user timeline success', () => {
        createXHRmock();
        fetchUserTimeline();
        expect(open).toBeCalledWith('GET', 'http://127.0.0.1:8080/api/1.0/twitter/user-timeline', true);
        expect(send).toBeCalled();
    });

});
