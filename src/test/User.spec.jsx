import React from 'react';
import { shallow } from 'enzyme';
import User from '../jsx/User';

describe('User with twitter handle', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<User profileImageUrl={'http://pbs.twimg.com/profile_images/0/my_photo.jpg'} 
                                             name={'myName'} 
                                             twitterHandle={'myHandle'} />));

    it('img should have correct src url', () => {
        expect(wrapper.find('img').prop('src')).toBe('http://pbs.twimg.com/profile_images/0/my_photo.jpg');
    });

    it('wrapper should contain name, myName', () => {
        expect(wrapper.contains('myName')).toEqual(true);
    })

    it('first span should contain name, myName', () => {
        expect(wrapper.find('span').at(0).text()).toEqual('myName');
    });

    it('second span should contain twitter handle, myHandle', () => {
        expect(wrapper.find('span').at(1).text()).toEqual('myHandle');
    });

    it('should render elements in correct order', () => {
        expect(wrapper.containsMatchingElement(
            <div className="user">
                <img id="profile-img" src="http://pbs.twimg.com/profile_images/0/my_photo.jpg" />
                <span className="name">myName</span>
                <span className="name small-text">myHandle</span>
            </div>)).toEqual(true);
    });

});

describe('User without twitter handle', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<User profileImageUrl={'http://pbs.twimg.com/profile_images/0/my_photo.jpg'} 
                                             name={'myName'} 
                                             twitterHandle={'myHandle'}
                                             showHandle={false} />));

    it('img should have correct src url', () => {
        expect(wrapper.find('img').prop('src')).toBe('http://pbs.twimg.com/profile_images/0/my_photo.jpg');
    });

    it('wrapper should contain name, myName', () => {
        expect(wrapper.contains('myName')).toEqual(true);
    })

    it('first span should contain name, myName', () => {
        expect(wrapper.find('span').at(0).text()).toEqual('myName');
    });

    it('wrapper should not contain twitter handle, myHandle', () => {
        expect(wrapper.contains('myHandle')).toEqual(false);
    });

    it('should render elements in correct order', () => {
        expect(wrapper.containsMatchingElement(
            <div className="user">
                <img id="profile-img" src="http://pbs.twimg.com/profile_images/0/my_photo.jpg" />
                <span className="name">myName</span>
            </div>)).toEqual(true);
    });

});
