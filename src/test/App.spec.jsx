import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../jsx/App';
import Timeline from '../jsx/Timeline.jsx';
import { fetchTimeline } from '../utils.js'

const utils = require('../utils.js');

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('first header should have title Lab for Mich', () => {
        expect(wrapper.find('header').at(0).text()).toEqual('Lab for Mich');
    });

    it('second header should have title Lab for Mich', () => {
        expect(wrapper.find('header').at(1).text()).toEqual('Home Timeline');
    });

    it('third header should have title Lab for Mich', () => {
        expect(wrapper.find('header').at(2).text()).toEqual('User Timeline');
    });

    it('first button should be labeled Get Timeline', () => {
        expect(wrapper.find('button').at(0).text()).toEqual('Get Timeline');
    });

    it('second button should be labeled Get User Timeline', () => {
        expect(wrapper.find('button').at(1).text()).toEqual('Get User Timeline');
    });

    it('should render the Home Timeline Component with timeline state', () => {
        expect(wrapper.containsMatchingElement(                
            <div id="home-timeline-div" className="timeline-div">
                <Timeline id="home-timeline" timeline={wrapper.instance().state.timeline} />
            </div>)).toEqual(true);
    });

    it('should render the User Timeline Component with timeline state', () => {
        expect(wrapper.containsMatchingElement(                
            <div id="user-timeline-div" className="timeline-div">
                <Timeline id="user-timeline" timeline={wrapper.instance().state.userTimeline} showHandle={false} />
            </div>)).toEqual(true);
    });

    it('Should render the Lab for Mich header, Get Timeline button, and timeline component in right order', () => {
        expect(wrapper.containsMatchingElement(
            <div className="App">
                <header className="App-header title">Lab for Mich</header>

                <div id="timelines-container">
                    <div id="home-timeline-container" className="timeline-container">
                        <header className="timeline-header">Home Timeline</header>
                        <div className="timeline-button-div">
                            <button id="timeline-button" className="button" type="button" >Get Timeline</button>
                        </div>
                        <div id="home-timeline-div" className="timeline-div">
                            <Timeline id="home-timeline" timeline={wrapper.instance().state.timeline} />
                        </div>
                    </div>

                    <div id="user-timeline-container" className="timeline-container">
                        <header className="timeline-header">User Timeline</header>
                        <div className="timeline-button-div" >
                            <button id="timeline-button" className="button" type="button" >Get User Timeline</button>
                        </div>
                        <div id="user-timeline-div" className="timeline-div">
                            <Timeline id="user-timeline" timeline={wrapper.instance().state.userTimeline} showHandle={false} />
                        </div>
                    </div>
                </div>
            </div>)).toEqual(true);
    });

    it('test get timeline button click event', () => {
        wrapper.instance().updateTimeline = jest.fn();
        wrapper.find('button').at(0).simulate('click');
        expect(wrapper.instance().updateTimeline).toHaveBeenCalledTimes(1);
    });

    it('test get user timeline button click event', () => {
        wrapper.instance().updateUserTimeline = jest.fn();
        wrapper.find('button').at(1).simulate('click');
        expect(wrapper.instance().updateUserTimeline).toHaveBeenCalledTimes(1);
    });

    it('test `componentDidMount()`', () => {
        wrapper.instance().updateTimeline = jest.fn();
        wrapper.instance().updateUserTimeline = jest.fn();
        wrapper.instance().componentDidMount();
        expect(wrapper.instance().updateTimeline).toHaveBeenCalledTimes(1);
        expect(wrapper.instance().updateUserTimeline).toHaveBeenCalledTimes(1);
    });

    it('test updateTimeline function', () => {
        utils.fetchTimeline = jest.fn().mockReturnValue(new Promise((resolve, reject) => {
            resolve([]);
        }));
        wrapper.instance().updateTimeline();
        expect(utils.fetchTimeline).toHaveBeenCalledTimes(1);
    });

    it('test updateUserTimeline function', () => {
        utils.fetchUserTimeline = jest.fn().mockReturnValue(new Promise((resolve, reject) => {
            resolve([]);
        }));
        wrapper.instance().updateUserTimeline();
        expect(utils.fetchUserTimeline).toHaveBeenCalledTimes(1);
    });

});

