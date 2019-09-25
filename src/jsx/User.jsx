import React, { Component } from 'react';
import PropTypes from 'prop-types';

class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="user" className="user">
                <img id="profile-img" src={this.props.profileImageUrl}></img>
                <span className="name">{this.props.name}</span>
                {
                    this.props.showHandle 
                        ? <span className="name small-text">{this.props.twitterHandle}</span>
                        : null
                }
            </div>
        );
    }

}

User.propTypes = { 
    profileImageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    twitterHandle: PropTypes.string.isRequired,
    showHandle: PropTypes.bool
};

User.defaultProps = {
    showHandle: true
}

export default User;
