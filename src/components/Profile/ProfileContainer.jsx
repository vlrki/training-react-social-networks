import React from 'react';
import { Redirect } from 'react-router-dom';

import Profile from './Profile';
import { addPost, updateNewPost, getUserProfile } from "../../redux/profile-reducer";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        posts: state.profilePage.posts,
        friends: state.profilePage.friends,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
};

export default compose(
    connect(mapStateToProps, { addPost, updateNewPost, getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
