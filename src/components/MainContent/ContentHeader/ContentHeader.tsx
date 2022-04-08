import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { EVENTS_ROUTE } from '../../../routes/routesPath';

import './ContentHeader.scss';

const ContentHeader: FC = () => {
  const navigate = useNavigate();

  const handleEventsNavigate = (
    e: React.MouseEvent<HTMLButtonElement>,
  ): void => {
    e.preventDefault();
    navigate(EVENTS_ROUTE);
  };

  return (
    <div className="content-header">
      <div className="content-header-title">
        <h2>Event creating service</h2>
      </div>
      <button onClick={handleEventsNavigate}>Create event</button>
    </div>
  );
};

export default ContentHeader;
