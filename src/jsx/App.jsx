import React, { Component } from "react";
import Timeline from "./Timeline.jsx";
import { fetchTimeline, fetchUserTimeline, fetchFilteredTimeline, postTweet } from "../utils.js";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeline: [],
            userTimeline: [],
            filterValue: '',
            activeTab: 'home-tab',
            postStatus: '',
            postCharCount: 0,
            postMessage: '',
        };

        this.updateFilterValue = this.updateFilterValue.bind(this);
        this.updateTimeline = this.updateTimeline.bind(this);
        this.updateUserTimeline = this.updateUserTimeline.bind(this);
        this.filterTimeline = this.filterTimeline.bind(this);
        this.enterToFilter = this.enterToFilter.bind(this);
        this.setActiveTab = this.setActiveTab.bind(this);
        this.showActiveTab = this.showActiveTab.bind(this);
        this.updatePostCharCount = this.updatePostCharCount.bind(this);
        this.postTweet = this.postTweet.bind(this);
    }

    updatePostCharCount(event) {
        this.setState({ postMessage: event.target.value });
        this.setState({ postCharCount: event.target.value.length });
    }

    updateFilterValue(event) {
        this.setState({ filterValue: event.target.value })
    }

    enterToFilter(event) {
        if (event.keyCode == 13 && this.state.filterValue != '') {
            this.filterTimeline(event);
        }
    }

    updateTimeline() {
        fetchTimeline().then((jsonTimeline) => {
            this.setState({ timeline: jsonTimeline });
            if (jsonTimeline == []) {
                this.setState({ userTimeline: "No tweets are available, post a tweet!" });
            }
        }, (error) => {
            console.log(error);
            this.setState({ timeline: "Unable to retrieve timeline at this time. Check back later." });
        });
    }

    updateUserTimeline() {
        fetchUserTimeline().then((jsonTimeline) => {
            if (jsonTimeline.length == 0) {
                this.setState({ userTimeline: "No tweets are available, post a tweet!" });
            } else {
                this.setState({ userTimeline: jsonTimeline });
            }
        }, (error) => {
            console.log(error);
            this.setState({ userTimeline: "Unable to retrieve timeline at this time. Check back later." });
        });
    }

    filterTimeline() {
        fetchFilteredTimeline(this.state.filterValue).then((jsonTimeline) => {
            if (jsonTimeline.length == 0) {
                this.setState({ timeline: "No tweets available with keyword: " + this.state.filterValue + ". Try something else!" });
            } else {
                this.setState({ timeline: jsonTimeline });
            }
        }, (error) => {
            console.log(error);
            this.setState({ timeline: "Unable to retrieve timeline at this time. Check back later." });
        });
    }

    postTweet() {
        postTweet(this.state.postMessage).then(() => {
            this.setState({ postStatus: "Success!" });
        }, (error) => {
            console.log(error);
            this.setState({ postStatus: "Failed to post tweet. Try again later!"});
        });
    }

    setActiveTab(event) {
        this.setState({ activeTab: event.target.id });
        event.target.className += " active";
    }

    showActiveTab() {
        switch(this.state.activeTab) {
            case 'home-tab':
                return (
                    <div id="home-timeline-container" className="timeline-container">
                        <div id="home-timeline-toolbar">
                            <div className="timeline-button-div">
                                <button id="timeline-button" className="button" type="button" onClick={() => this.updateTimeline()} >Get Timeline</button>
                            </div>
                            <div id="filter-div" >
                                <input id="filter-input" type="text" value={this.state.value} onChange={this.updateFilterValue} placeholder="Filter" name="filter" onKeyUp={this.enterToFilter} />
                                <input type="button" id="filter-button" className="button" disabled={!this.state.filterValue} onClick={this.filterTimeline} value="Filter" />
                            </div>
                        </div>
                        <div id="home-timeline-div" className="timeline-div">
                            <Timeline id="home-timeline" timeline={this.state.timeline} />
                        </div>
                    </div>
                );
            case 'user-tab':
                return (
                    <div id="user-timeline-container" className="timeline-container">
                        <div className="timeline-button-div" >
                            <button id="timeline-button" className="button" type="button" onClick={() => this.updateUserTimeline()} >Get User Timeline</button>
                        </div>
                        <div id="user-timeline-div" className="timeline-div">
                            <Timeline id="user-timeline" timeline={this.state.userTimeline} showHandle={false} />
                        </div>
                    </div>
                );
            case 'post-tab':
                return (                    
                    <div id="post-tweet-container" className="timeline-container">
                        <div id="text-area-div">
                            <textarea id="post-tweet-textarea" name="hello" onChange={this.updatePostCharCount} autoFocus maxLength={280} rows={10} placeholder="What's happening?"></textarea>
                            <div id="char-count-div">
                                <span>{this.state.postCharCount}/280</span>
                            </div>
                        </div>
                        <div id="post-status-bar">
                            <span id="post-status">{this.state.postStatus}</span>
                            <button className="button" disabled={this.state.postCharCount == 0} onClick={this.postTweet}>Tweet</button>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    }


    componentDidMount() {
        this.updateTimeline();
        this.updateUserTimeline();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header title">Lab for Mich</header>

                <div id="timelines-container">
                    <div className="tabs">
                        <button id="home-tab" className={this.state.activeTab == "home-tab" ? "tab active" : "tab"} onClick={this.setActiveTab}>Home Timeline</button>
                        <button id="user-tab" className={this.state.activeTab == "user-tab" ? "tab active" : "tab"} onClick={this.setActiveTab}>User Timeline</button>
                        <button id="post-tab" className={this.state.activeTab == "post-tab" ? "tab active" : "tab"} onClick={this.setActiveTab}>Post Tweet</button>
                    </div>
                    {this.showActiveTab()}
                </div>
            </div>
        );
    }

}

export default App;
