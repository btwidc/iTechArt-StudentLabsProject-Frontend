import React from 'react';

import ProfileMainInfo from '../../components/ProfileMainInfo/ProfileMainInfo';
import './SidebarInfo.scss';

const SidebarInfo = () => {
  return (
    <div className="sidebar-info-container">
      <ProfileMainInfo/>
      <div id="sidebar-extension"></div>
    </div>
  );
};

export default SidebarInfo;
