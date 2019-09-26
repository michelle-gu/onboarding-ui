import React, { Component } from "react";
import Timeline from "./Timeline.jsx";
import { fetchTimeline, fetchUserTimeline, fetchFilteredTimeline } from "../utils.js";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeline: [],
            userTimeline: [],
            filterValue: '',
        };

        this.updateFilterValue = this.updateFilterValue.bind(this);
        this.updateTimeline = this.updateTimeline.bind(this);
        this.updateUserTimeline = this.updateUserTimeline.bind(this);
        this.filterTimeline = this.filterTimeline.bind(this);
    }

    updateFilterValue(event) {
        this.setState({ filterValue: event.target.value })
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
            this.setState({ userTimeline: jsonTimeline });
            if (jsonTimeline == []) {
                this.setState({ userTimeline: "No tweets are available, post a tweet!" });
            }
        }, (error) => {
            console.log(error);
            this.setState({ userTimeline: "Unable to retrieve timeline at this time. Check back later." });
        });
    }

    filterTimeline(event) {
        fetchFilteredTimeline(this.state.filterValue).then((jsonTimeline) => {
            this.setState({ timeline: jsonTimeline });
            if (jsonTimeline == []) {
                this.setState({ userTimeline: "No tweets are available, post a tweet!" });
            }
        }, (error) => {
            console.log(error);
            this.setState({ timeline: "Unable to retrieve timeline at this time. Check back later." });
        });

        event.preventDefault();
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
                        <div id="home-timeline-toolbar">
                            <div className="timeline-button-div">
                                <button id="timeline-button" className="button" type="button" onClick={() => this.updateTimeline()} >Get Timeline</button>
                            </div>
                            <form id="filter-div" onSubmit={this.filterTimeline} >
                                <input id="filter-input" type="text" value={this.state.value} onChange={this.updateFilterValue} placeholder="Filter" name="filter" />
                                <input id="filter-button" className="button" type="submit" disabled={!this.state.filterValue} />
                            </form>
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
