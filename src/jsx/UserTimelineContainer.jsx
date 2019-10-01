import React, { Component } from "react";
import Timeline from "./Timeline.jsx";
import { fetchUserTimeline } from "../utils.js";

class UserTimelineContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userTimeline: [],
        };

        this.updateUserTimeline = this.updateUserTimeline.bind(this);
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

    componentDidMount() {
        this.updateUserTimeline();
    }

    render() {
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
    }

}

export default UserTimelineContainer;
