import React from 'react';
import { shallow } from 'enzyme';
import Timeline from '../jsx/Timeline.jsx';
import Post from '../jsx/Post.jsx';

const exampleTimeline = [
    {
        "message": "Hello",
        "user": {
            "twitterHandle": "myHandle",
            "name": "myName",
            "profileImageUrl": "http://pbs.twimg.com/profile_images/0/my_photo.jpg"
        },
        "createdAt": 1568236459000,
        "url": "https://twitter.com/myHandle/status/0"
    },
    {
        "message": "Hi",
        "user": {
            "twitterHandle": "myHandle",
            "name": "myName",
            "profileImageUrl": "http://pbs.twimg.com/profile_images/0/my_photo.jpg"
        },
        "createdAt": 1568236459001,
        "url": "https://twitter.com/myHandle/status/1"
    }
];

describe('Timeline without posts', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Timeline timeline={[]} />));
    
    it('should render 1 <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

});


describe('Timeline with posts', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Timeline timeline={exampleTimeline} />));

    it('should render 1 <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render number of posts from timeline', () => {
        expect(wrapper.find('Post').length).toEqual(wrapper.instance().props.timeline.length);
    });

    it('posts should be inside div', () => {
        
    });

});
