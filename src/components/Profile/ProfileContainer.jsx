import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from "react-router-dom";
import Profile from './Profile.jsx'
import {getUserProfile} from "../../redux/profile-reducer.js";
import {withAuthRedirect} from "../../hoc/withAuthRedirect.js";

class ProfileContainer extends React.Component{

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);
