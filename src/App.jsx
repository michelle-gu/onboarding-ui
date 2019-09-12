import React, { Component } from 'react';
import Timeline from "./jsx/Timeline.jsx";
import { fetchTimeline } from './utils.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          timeline: [],
        };

        this.getTimeline = this.getTimeline.bind(this);
    }

    componentDidMount() {
        fetchTimeline(this.getTimeline);
    }

    getTimeline(newTimeline) {
        this.setState({ timeline: newTimeline });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header title">Lab for Mich</header>

                <div id="timeline-button-div">
                    <button id="timeline-button" className="button" type="button" onClick={() => (fetchTimeline(this.getTimeline))} >Get Timeline</button>
                </div>

                <div id="timeline-div">
                    <Timeline timeline={this.state.timeline} />
                </div>
            </div>
        );
    }

}

export default App;
