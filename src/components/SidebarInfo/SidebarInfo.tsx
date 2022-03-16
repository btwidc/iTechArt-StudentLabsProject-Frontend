import React, { FC } from 'react';

import ProfileMainInfo from '../../components/ProfileMainInfo/ProfileMainInfo';
import './SidebarInfo.scss';

const SidebarInfo: FC = () => {
  return (
    <div className="sidebar-info-container">
      <ProfileMainInfo />
      <div id="sidebar-extension" />
    </div>
  );
};

export default SidebarInfo;
