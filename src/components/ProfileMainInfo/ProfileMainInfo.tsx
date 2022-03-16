import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './ProfileMainInfo.scss';

const ProfileMainInfo: FC = () => {
  const { name, surname, email } = useTypedSelector((state) => state.user);
  const userFullName = `${name} ${surname}`;

  return (
    <div className="profile-main-info-container">
      <h3>{userFullName}</h3>
      <h4>{email}</h4>
    </div>
  );
};

export default ProfileMainInfo;
