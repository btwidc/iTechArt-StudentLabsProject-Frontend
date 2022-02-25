import React from 'react';

import NavMenu from '../../components/NavMenu/NavMenu';
import Content from '../../components/Content/Content';
import SidebarInfo from '../../components/SidebarInfo/SidebarInfo';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="limiter">
      <NavMenu />
      <Content />
      <SidebarInfo />
    </div>
  );
};

export default MainPage;
