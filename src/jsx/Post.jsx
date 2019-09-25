import React, { Component } from "react";
import PropTypes from 'prop-types';
import User from './User.jsx';

const options = { month: 'short', day: 'numeric' };

class Post extends Component {

    constructor(props) {
        super(props);

        this.createdAt = new Date(this.props.createdAt).toLocaleDateString("en-US", options);
    }

    render() {
        return (
            <div className="post">
                <User name={this.props.name} 
                      twitterHandle={this.props.twitterHandle} 
                      profileImageUrl={this.props.profileImageUrl} 
                      showHandle={this.props.showHandle} /> 

                <a className="link" href={this.props.url} target="_blank">
                    <div className="tweet">
                        <div className="date small-text">{this.createdAt}</div>
                        <div>{this.props.message}</div>
                    </div>
                </a>
            </div>
        );
    }

}

Post.propTypes = { 
    profileImageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    twitterHandle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    showHandle: PropTypes.bool
};

Post.defaultProps = {
    showHandle: true
}

export default Post;
