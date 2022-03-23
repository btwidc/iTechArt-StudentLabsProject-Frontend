import React, { FC } from 'react';

import NavMenu from '../../components/NavMenu/NavMenu';
import Content from '../../components/Content/Content';
import SidebarInfo from '../../components/SidebarInfo/SidebarInfo';
import './MainPage.scss';

const MainPage: FC = () => {
  return (
    <div className="main-page">
      <NavMenu />
      <Content />
      <SidebarInfo />
    </div>
  );
};

export default MainPage;
