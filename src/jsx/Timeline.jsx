import React, { Component } from 'react';
import Post from './Post.jsx';
import PropTypes from 'prop-types';

class Timeline extends Component {

    constructor(props) {
        super(props);
    }

    generatePosts() {
        return this.props.timeline.map((post, index) => {
            return <Post key={index}
                         profileImageUrl={post.user.profileImageUrl}
                         name={post.user.name}
                         twitterHandle={post.user.twitterHandle}
                         createdAt={post.createdAt}
                         message={post.message}
                         url={post.url} />;
        });
    }

    render() {
        return (
            <div id="timeline">
                {this.generatePosts()}
            </div>
        );
    }

}

Timeline.propTypes = { 
    timeline: PropTypes.array.isRequired,
};

export default Timeline;
