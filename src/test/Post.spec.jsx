import React from 'react';
import { shallow } from 'enzyme';
import Post from '../jsx/Post';

describe('Post', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Post />));

  it('should render 5 <div />', () => {
    expect(wrapper.find('div').length).toEqual(5);
  });

});
