import React, { FC, useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfileInfo } from '../../store/actions/userActions';

import ProfileRow from '../../components/ProfileRow/ProfileRow';
import './Profile.scss';

const Profile: FC = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const userProfileInfo = useTypedSelector((state) => state.user);

  useEffect(() => {
    if (id) {
      dispatch(getProfileInfo(id));
    }
  }, [dispatch, id]);

  return (
    <div className="profile-info-container">
      <div className="profile-info-header">
        <h2>Profile</h2>
      </div>
      <ProfileRow labelName="Name:" rowInfo={userProfileInfo.name} />
      <ProfileRow labelName="Surname:" rowInfo={userProfileInfo.surname} />
      <ProfileRow labelName="Email:" rowInfo={userProfileInfo.email} />
      <ProfileRow labelName="Skype:" rowInfo={userProfileInfo.skype} />
      <ProfileRow
        labelName="Department:"
        rowInfo={userProfileInfo.department}
      />
      <ProfileRow
        labelName="Experience:"
        rowInfo={userProfileInfo.ageExperience}
      />
      <ProfileRow labelName="Summary:" rowInfo={userProfileInfo.summary} />
    </div>
  );
};

export default Profile;
