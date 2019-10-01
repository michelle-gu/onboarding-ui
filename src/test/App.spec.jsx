import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../jsx/App';
import HomeTimelineContainer from '../jsx/HomeTimelineContainer.jsx';
import { fetchTimeline, fetchUserTimeline, fetchFilteredTimeline } from '../utils.js'

const utils = require('../utils.js');

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('first header should have title Lab for Mich', () => {
        expect(wrapper.find('header').at(0).text()).toEqual('Lab for Mich');
    });

    it('first button should be labeled Home Timeline', () => {
        expect(wrapper.find('button').at(0).text()).toEqual('Home Timeline');
    });

    it('second button should be labeled User Timeline', () => {
        expect(wrapper.find('button').at(1).text()).toEqual('User Timeline');
    });

    it('third button should be labeled Post Tweet', () => {
        expect(wrapper.find('button').at(2).text()).toEqual('Post Tweet');
    });

    // it('fourth button should be labeled Get Timeline', () => {
    //     expect(wrapper.find('button').at(3).text()).toEqual('Get Timeline');
    // });

    // it('should render the Home Timeline Component with timeline state', () => {
    //     expect(wrapper.containsMatchingElement(                
    //         <div id="home-timeline-div" className="timeline-div">
    //             <Timeline id="home-timeline" timeline={wrapper.instance().state.timeline} />
    //         </div>)).toEqual(true);
    // });

    it('Should render the Lab for Mich header, Get Timeline button, and timeline component in right order', () => {
        expect(wrapper.containsMatchingElement(
            <div className="App">
                <header className="App-header title">Lab for Mich</header>

                <div id="timelines-container">
                    <div className="tabs">
                        <button id="home-tab">Home Timeline</button>
                        <button id="user-tab">User Timeline</button>
                        <button id="post-tab">Post Tweet</button>
                    </div>

                    <HomeTimelineContainer/>
                </div>
            </div>)).toEqual(true);
    });

    // it('test get timeline button click event', () => {
    //     wrapper.instance().updateTimeline = jest.fn();
    //     wrapper.find('button').at(3).simulate('click');
    //     expect(wrapper.instance().updateTimeline).toHaveBeenCalledTimes(1);
    // });

    // it('test `componentDidMount()`', () => {
    //     wrapper.instance().updateTimeline = jest.fn();
    //     wrapper.instance().updateUserTimeline = jest.fn();
    //     wrapper.instance().componentDidMount();
    //     expect(wrapper.instance().updateTimeline).toHaveBeenCalledTimes(1);
    //     expect(wrapper.instance().updateUserTimeline).toHaveBeenCalledTimes(1);
    // });

    // it('test updateTimeline function', () => {
    //     utils.fetchTimeline = jest.fn().mockReturnValue(new Promise((resolve, reject) => {
    //         resolve([]);
    //     }));
    //     wrapper.instance().updateTimeline();
    //     expect(utils.fetchTimeline).toHaveBeenCalledTimes(1);
    // });

    // it('test updateUserTimeline function', () => {
    //     utils.fetchUserTimeline = jest.fn().mockReturnValue(new Promise((resolve, reject) => {
    //         resolve([]);
    //     }));
    //     wrapper.instance().updateUserTimeline();
    //     expect(utils.fetchUserTimeline).toHaveBeenCalledTimes(1);
    // });

    // it('test filterTimeline function', () => {
    //     utils.fetchFilteredTimeline = jest.fn().mockReturnValue(new Promise((resolve, reject) => {
    //         resolve([]);
    //     }));
    //     wrapper.instance().filterTimeline();
    //     expect(utils.fetchFilteredTimeline).toHaveBeenCalledTimes(1);
    // });

});

