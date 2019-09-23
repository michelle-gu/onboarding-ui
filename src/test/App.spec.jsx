import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../jsx/App';
import Timeline from '../jsx/Timeline.jsx';
import { fetchTimeline } from '../utils.js'

const utils = require('../utils.js');

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('header should have title Lab for Mich', () => {
        expect(wrapper.find('header').text()).toEqual('Lab for Mich');
    });

    it('button should be labeled Get Timeline', () => {
        expect(wrapper.find('button').text()).toEqual('Get Timeline');
    });

    it('should render the Timeline Component with timeline state', () => {
        expect(wrapper.containsMatchingElement(                
            <div id="timeline-div">
                <Timeline timeline={wrapper.instance().state.timeline} />
            </div>)).toEqual(true);
    });

    it('Should render the Lab for Mich header, Get Timeline button, and timeline component in right order', () => {
        expect(wrapper.containsMatchingElement(
            <div className="App">
                <header className="App-header title">Lab for Mich</header>
                <div id="timeline-button-div">
                    <button id="timeline-button" className="button" type="button" >Get Timeline</button>
                </div>
                <div id="timeline-div">
                    <Timeline timeline={wrapper.instance().state.timeline} />
                </div>
            </div>)).toEqual(true);
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

