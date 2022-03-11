import React from 'react';

import NavMenu from '../../components/NavMenu/NavMenu';
import Content from '../../components/Content/Content';
import SidebarInfo from '../../components/SidebarInfo/SidebarInfo';
import Modal from '../../components/Modal/Modal';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="main-page">
      <NavMenu />
      <Content />
      <SidebarInfo />
      <Modal />
    </div>
  );
};

export default MainPage;
