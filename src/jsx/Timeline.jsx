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
                         url={post.url}
                         showHandle={this.props.showHandle} />;
        });
    }

    render() {
        return (
            <div id={this.props.id} className="timeline">
                {
                    (Array.isArray(this.props.timeline))
                        ? this.generatePosts()
                        : this.props.timeline
                }
            </div>
        );
    }

}

Timeline.propTypes = { 
    timeline: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
    showHandle: PropTypes.bool
};

Timeline.defaultProps = {
    showHandle: true
}

export default Timeline;
