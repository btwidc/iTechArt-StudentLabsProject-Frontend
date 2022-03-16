import React, { FC } from 'react';

import ContentHeader from './ContentHeader/ContentHeader';
import ContentDescription from './ContentDescription/ContentDescription';

import './MainContent.scss';

const MainContent: FC = () => {
  return (
    <div className="content-info-container">
      <ContentHeader />
      <ContentDescription />
    </div>
  );
};

export default MainContent;
