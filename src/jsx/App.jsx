import React, { Component } from "react";
import Timeline from "./Timeline.jsx";
import { fetchTimeline, fetchUserTimeline } from "../utils.js";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeline: [],
            userTimeline: [],
        };

        this.updateTimeline = this.updateTimeline.bind(this);
        this.updateUserTimeline = this.updateUserTimeline.bind(this);
    }

    updateTimeline() {
        fetchTimeline().then((jsonTimeline) => {
            this.setState({ timeline: jsonTimeline });
        }, (error) => {
            console.log(error);
            document.getElementById("home-timeline").innerHTML = "Unable to retrieve timeline at this time. Check back later.";
        });
    }

    updateUserTimeline() {
        fetchUserTimeline().then((jsonTimeline) => {
            this.setState({ userTimeline: jsonTimeline });
            if (jsonTimeline == []) {
                document.getElementById("user-timeline").innerHTML = "No tweets are available, post a tweet!";
            }
        }, (error) => {
            console.log(error);
            document.getElementById("user-timeline").innerHTML = "Unable to retrieve timeline at this time. Check back later.";
        });
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
                    <div id="home-timeline-container" className="timeline-container">
                        <header className="timeline-header">Home Timeline</header>
                        <div className="timeline-button-div">
                            <button id="timeline-button" className="button" type="button" onClick={() => this.updateTimeline()} >Get Timeline</button>
                        </div>
                        <div id="home-timeline-div" className="timeline-div">
                            <Timeline id="home-timeline" timeline={this.state.timeline} />
                        </div>
                    </div>

                    <div id="user-timeline-container" className="timeline-container">
                        <header className="timeline-header">User Timeline</header>
                        <div className="timeline-button-div" >
                            <button id="timeline-button" className="button" type="button" onClick={() => this.updateUserTimeline()} >Get User Timeline</button>
                        </div>
                        <div id="user-timeline-div" className="timeline-div">
                            <Timeline id="user-timeline" timeline={this.state.userTimeline} showHandle={false} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
