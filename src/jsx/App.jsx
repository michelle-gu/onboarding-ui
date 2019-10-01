import React, { Component } from "react";
import HomeTimelineContainer from "./HomeTimelineContainer.jsx";
import UserTimelineContainer from "./UserTimelineContainer.jsx";
import PostTweetContainer from "./PostTweetContainer.jsx";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'home-tab',
        };

        this.setActiveTab = this.setActiveTab.bind(this);
        this.showActiveTab = this.showActiveTab.bind(this);
    }

    setActiveTab(event) {
        this.setState({ activeTab: event.target.id });
        event.target.className += " active";
    }

    showActiveTab() {
        switch(this.state.activeTab) {
            case 'home-tab':
                return (<HomeTimelineContainer/>);
            case 'user-tab':
                return (<UserTimelineContainer/>);
            case 'post-tab':
                return (<PostTweetContainer/>);
            default:
                return null;
        }
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
