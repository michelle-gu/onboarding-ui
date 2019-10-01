import React, { Component } from "react";
import { postTweet } from "../utils.js";

class PostTweetContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postStatus: '',
            postCharCount: 0,
            postMessage: '',
        };

        this.updatePostCharCount = this.updatePostCharCount.bind(this);
        this.postTweet = this.postTweet.bind(this);
    }

    updatePostCharCount(event) {
        this.setState({ postMessage: event.target.value });
        this.setState({ postCharCount: event.target.value.length });
    }

    postTweet() {
        postTweet(this.state.postMessage).then(() => {
            this.setState({ postStatus: "Success!" });
        }, (error) => {
            console.log(error);
            this.setState({ postStatus: "Failed to post tweet. Try again later!"});
        });
    }

    render() {
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
    }

}

export default PostTweetContainer;
