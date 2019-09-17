import React from 'react';
import { shallow } from 'enzyme';
import Post from '../jsx/Post';

describe('Post', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Post profileImageUrl={'http://pbs.twimg.com/profile_images/0/my_photo.jpg'} 
                                             name={'myName'} 
                                             twitterHandle={'myHandle'} 
                                             createdAt={0} 
                                             message={'Hello'} 
                                             url={'https://twitter.com/myHandle/status/0'} />));

    it('img should have correct src url', () => {
        expect(wrapper.find('img').prop('src')).toBe('http://pbs.twimg.com/profile_images/0/my_photo.jpg');
    });

    it('first span should contain name, myName', () => {
        expect(wrapper.find('span').at(0).text()).toEqual('myName');
    });

    it('second span should contain twitter handle, myHandle', () => {
        expect(wrapper.find('span').at(1).text()).toEqual('myHandle');
    });

    it('fourth div should contain created at date, Dec 31', () => {
        expect(wrapper.find('div').at(3).text()).toEqual('Dec 31');
    });

    it('fifth div should contain message, Hello', () => {
        expect(wrapper.find('div').at(4).text()).toEqual('Hello');
    });

    it('should render <a /> with correct href', () => {
        expect(wrapper.find('a').prop('href')).toBe('https://twitter.com/myHandle/status/0');
    });

    it('should render elements in correct order', () => {
        expect(wrapper.containsMatchingElement(
            <div className="post">
                <div className="user">
                    <img id="profile-img" src="http://pbs.twimg.com/profile_images/0/my_photo.jpg" />
                    <span className="name">myName</span>
                    <span className="name small-text">myHandle</span>
                </div>
                <a className="link" href="https://twitter.com/myHandle/status/0" target="_blank">
                    <div className="tweet">
                        <div className="date small-text">Dec 31</div>
                        <div>Hello</div>
                    </div>
                </a>
            </div>)).toEqual(true);
    });

});
