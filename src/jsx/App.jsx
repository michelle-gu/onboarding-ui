import React, { Component } from 'react';
import Timeline from "./Timeline.jsx";
import { fetchTimeline } from '../utils.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeline: [],
        };

        this.updateTimeline = this.updateTimeline.bind(this);
    }

    updateTimeline() {
        fetchTimeline().then((jsonTimeline) => {
            this.setState({ timeline: jsonTimeline });
        }, (error) => {
            console.log(error);
            document.getElementById("timeline").innerHTML = "Unable to retrieve timeline at this time. Check back later.";
        });
    }

    componentDidMount() {
        this.updateTimeline();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header title">Lab for Mich</header>

                <div id="timeline-button-div">
                    <button id="timeline-button" className="button" type="button" onClick={() => this.updateTimeline()} >Get Timeline</button>
                </div>

                <div id="timeline-div">
                    <Timeline timeline={this.state.timeline} />
                </div>
            </div>
        );
    }

}

export default App;
