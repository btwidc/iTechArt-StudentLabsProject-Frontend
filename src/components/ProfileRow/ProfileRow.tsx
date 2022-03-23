import React, { FC } from 'react';

import './ProfileRow.scss';

interface ProfileRowProps {
  labelName: string;
  rowInfo: string | number;
}

const ProfileRow: FC<ProfileRowProps> = ({ labelName, rowInfo }) => {
  return (
    <div className="profile-info-row">
      <h3 className="profile-info-label">{labelName}</h3>
      <h4 className="profile-info-content">{rowInfo}</h4>
    </div>
  );
};

export default ProfileRow;
