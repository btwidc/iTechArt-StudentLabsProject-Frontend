import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import ProfileRow from './ProfileRow/ProfileRow';
import './Profile.scss';

const Profile = () => {
  const userProfileInfo = useTypedSelector((state) => state.user);
  return (
    <div className="profile-info-container">
      <div className="profile-info-header">
        <h2>Profile</h2>
      </div>
      <ProfileRow labelName="Name:" rowInfo={userProfileInfo.name} />
      <ProfileRow labelName="Surname:" rowInfo={userProfileInfo.surname} />
      <ProfileRow labelName="Email:" rowInfo={userProfileInfo.email} />
      <ProfileRow labelName="Skype:" rowInfo={userProfileInfo.skype} />
      <ProfileRow labelName="Department:" rowInfo={userProfileInfo.department} />
      <ProfileRow labelName="Experience:" rowInfo={userProfileInfo.ageExperience} />
      <ProfileRow labelName="Summary:" rowInfo={userProfileInfo.summary} />
    </div>
  );
};

export default Profile;
