import React, { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { EVENT_FORM_ROUTE } from '../../../routes/routesPath';

import './EventsListHeader.scss';

const EventsListHeader: FC = () => {
  const navigate = useNavigate();

  const navigateEventFormHandler = () => {
    navigate(EVENT_FORM_ROUTE);
  };

  return (
    <div className="events-list-header">
      <h2>Events</h2>
      <button onClick={navigateEventFormHandler}>Create new event</button>
    </div>
  );
};

export default EventsListHeader;
