import React from 'react';
import { unstable_createResource } from 'react-cache';

import fetchAPI from './fetchAPI';

const profileResource = unstable_createResource((item) => {
  return fetchAPI(`/profile/${item}`);
});

function Profile() {
  const profilePicture = profileResource.read('photo');
  const intro = profileResource.read('intro');

  return (
    <>
      <div className="profile-picture">
        <img src={profilePicture} alt="IloveColdplay" />
      </div>
      <div className="profile-intro">
        {intro.split('\n').map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </>
  );
}

export default Profile;
