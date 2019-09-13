import { fetchTimeline } from '../utils.js';

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

const mockXHR = {
    open: jest.fn(),
    send: jest.fn(),
    readyState: 4,
    status: 200,
    responseText: exampleResponseText
};

describe('Utils', function() {

    test('fetch timeline success', function(done) {
        window.XMLHttpRequest = jest.fn(() => mockXHR);

        function callback(data) {
            // expect(data).toBe(exampleResponseText);
            done();
        }
        fetchTimeline(callback);

        mockXHR.onreadystatechange();
    });

});
