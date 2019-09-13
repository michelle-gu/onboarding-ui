import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../jsx/App';
import Timeline from '../jsx/Timeline.jsx';
import { fetchTimeline } from '../utils.js'

const utils = require('../utils.js');

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render 3 <div />', () => {
        expect(wrapper.find('div').length).toEqual(3);
    });

    it('should render 1 <header />', () => {
        expect(wrapper.find('header').length).toEqual(1);
    });

    it('should render 1 <button />', () => {
        expect(wrapper.find('button').length).toEqual(1);
    });

    it('should render the Timeline Component', () => {
        expect(wrapper.containsMatchingElement(<Timeline timeline={wrapper.instance().state.timeline} />)).toEqual(true);
    });

    it('test button click event', () => {
        utils.fetchTimeline = jest.fn();
        wrapper.find('button').simulate('click');
        expect(utils.fetchTimeline).toHaveBeenCalledTimes(1);
    });

    it('test `componentDidMount()`', () => {
        utils.fetchTimeline = jest.fn();
        wrapper.instance().componentDidMount();
        expect(utils.fetchTimeline).toHaveBeenCalledTimes(1);
    });

    it('test getTimeline function', () => {
        wrapper.instance().getTimeline([{"message": "test"}]);
        expect(wrapper.state('timeline')).toEqual([{"message": "test"}]);
    });

});

