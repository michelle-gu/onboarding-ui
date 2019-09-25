import React from 'react';
import { shallow } from 'enzyme';
import Post from '../jsx/Post';
import User from '../jsx/User';

describe('Post', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Post profileImageUrl={'http://pbs.twimg.com/profile_images/0/my_photo.jpg'} 
                                             name={'myName'} 
                                             twitterHandle={'myHandle'} 
                                             createdAt={0} 
                                             message={'Hello'} 
                                             url={'https://twitter.com/myHandle/status/0'}
                                             showHandle={true} />));

    it('User should have correct profile image url', () => {
        expect(wrapper.find('User').prop('profileImageUrl')).toBe('http://pbs.twimg.com/profile_images/0/my_photo.jpg');
    });

    it('User should have correct name', () => {
        expect(wrapper.find('User').prop('name')).toBe('myName');
    });

    it('User should have correct twitter handle', () => {
        expect(wrapper.find('User').prop('twitterHandle')).toBe('myHandle');
    });

    it('User should have correct showHandle value', () => {
        expect(wrapper.find('User').prop('showHandle')).toBe(true);
    });

    it('third div should contain created at date, Dec 31', () => {
        expect(wrapper.find('div').at(2).text()).toEqual('Dec 31');
    });

    it('fourth div should contain message, Hello', () => {
        expect(wrapper.find('div').at(3).text()).toEqual('Hello');
    });

    it('should render <a /> with correct href', () => {
        expect(wrapper.find('a').prop('href')).toBe('https://twitter.com/myHandle/status/0');
    });

    it('should render elements in correct order', () => {
        expect(wrapper.containsMatchingElement(
            <div className="post">
                <User name='myName'
                      twitterHandle='myHandle' 
                      profileImageUrl='http://pbs.twimg.com/profile_images/0/my_photo.jpg'
                      showHandle={true} /> 

                <a className="link" href="https://twitter.com/myHandle/status/0" target="_blank">
                    <div className="tweet">
                        <div className="date small-text">Dec 31</div>
                        <div>Hello</div>
                    </div>
                </a>
            </div>)).toEqual(true);
    });

});
