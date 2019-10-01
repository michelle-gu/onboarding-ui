import React, { Component } from "react";
import Timeline from "./Timeline.jsx";
import { fetchTimeline, fetchFilteredTimeline } from "../utils.js";

class HomeTimelineContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeline: [],
            filterValue: '',
        };

        this.updateFilterValue = this.updateFilterValue.bind(this);
        this.updateTimeline = this.updateTimeline.bind(this);
        this.filterTimeline = this.filterTimeline.bind(this);
        this.enterToFilter = this.enterToFilter.bind(this);
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

    componentDidMount() {
        this.updateTimeline();
    }

    render() {
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
    }

}

export default HomeTimelineContainer;
