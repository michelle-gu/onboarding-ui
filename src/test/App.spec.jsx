import React from 'react';
import { shallow } from 'enzyme';
import App from '../jsx/App';
import Timeline from '../jsx/Timeline.jsx';

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render 3 <div />', () => {
        expect(wrapper.find('div').length).toEqual(3);
    });

    it('should render 3 <div />', () => {
        expect(wrapper.find('div').length).toEqual(3);
    });

    it('should render the Timeline Component', () => {
        expect(wrapper.containsMatchingElement(<Timeline />)).toEqual(true);
    });
});

describe('Test Button component', () => {
  it('Test click getTimeline button event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<button onClick={mockCallBack}>Ok!</button>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
