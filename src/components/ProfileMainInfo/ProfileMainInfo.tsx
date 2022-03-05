import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './ProfileMainInfo.scss';

const ProfileMainInfo = () => {
  const userInfo = useTypedSelector((state) => state.user);
  return (
    <div className="profile-main-info-container">
      <h3>{userInfo.name + " " + userInfo.surname}</h3>
      <h4>{userInfo.email}</h4>
    </div>
  );
};

export default ProfileMainInfo;
