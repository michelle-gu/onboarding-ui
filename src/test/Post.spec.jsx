import React from 'react';
import { shallow } from 'enzyme';
import Post from '../jsx/Post';

describe('Post', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Post profileImageUrl={'http://pbs.twimg.com/profile_images/0/my_photo.jpg'} 
                                             name={'myName'} 
                                             twitterHandle={'myHandle'} 
                                             createdAt={1568236459000} 
                                             message={'Hello'} 
                                             url={'https://twitter.com/myHandle/status/0'} />));

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



// TODO: Post test -> have content and ensure the content is shown in the expected format

// for a url tag: you could find an img tag and then ensure it has the right src url
// if it was text in a div, i wouldn’t bother with div since its’ so generic and just ensure the content is there
// mm so like i can use my props that are empty strings right now and put in sample data
// component.contains(‘text’)
// content as in the html elements it contains or text it contains yeah?
// content  as in date info: Dec 30


