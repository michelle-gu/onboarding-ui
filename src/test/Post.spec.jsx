import React from 'react';
import { shallow } from 'enzyme';
import Post from '../jsx/Post';

describe('Post', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Post profileImageUrl={''} 
                                             name={''} 
                                             twitterHandle={''} 
                                             createdAt={0} 
                                             message={''} 
                                             url={''} />));

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render 5 <div />', () => {
        expect(wrapper.find('div').length).toEqual(5);
    });

    it('should render 1 <img />', () => {
        expect(wrapper.find('img').length).toEqual(1);
    });

    it('should render 2 <span />', () => {
        expect(wrapper.find('span').length).toEqual(2);
    });

    it('should render 1 <a />', () => {
        expect(wrapper.find('a').length).toEqual(1);
    });

});
