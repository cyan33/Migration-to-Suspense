import React, { Component } from 'react';
import Spinner from './Spinner';
import fetchAPI from './fetchAPI';

class Profile extends Component {
  state = {
    profilePicture: null,
    intro: null,
  }

  componentDidMount() {
    // fetch profile picture and text content
    fetchAPI('/profile/photo').then((profilePicture) => {
      this.setState({ profilePicture });
    });
    fetchAPI('/profile/intro').then((intro) => {
      this.setState({ intro });
    })
  }

  render() {
    const { profilePicture, intro } = this.state;
    return (
      <>
        <div className="profile-picture">
          {profilePicture ? (
            <img src={profilePicture} alt="IloveColdplay" />
          ) : <Spinner />}
        </div>
        <div className="profile-intro">
          {intro ? (
            intro.split('\n').map((para, index) => (
              <p key={index}>{para}</p>
            ))
          ) : <Spinner />}
        </div>
      </>
    );
  }
}

export default Profile;
