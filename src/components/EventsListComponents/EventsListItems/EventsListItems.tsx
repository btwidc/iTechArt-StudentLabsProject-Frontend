import React, { FC } from 'react';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { Link } from 'react-router-dom';

import './EventsListItems.scss';

const EventsListItems: FC = () => {
  const { events } = useTypedSelector((state) => state.events);
  return (
    <div className="events-list">
      {events?.map((event) => (
        <div key={event.id} className="events-list-block">
          <Link to={`/events/${event.id}`}>
            <div className="event-row">
              <h3 className="event-date">{event.date}</h3>
            </div>
            <div className="event-row">
              <h5>
                <span className="event-row-title">Category:</span>
                {event.category.name}
              </h5>
            </div>
            <div className="event-row">
              <h5>
                <span className="event-row-title">Participant:</span>
                {event.profile.name} {event.profile.surname}
              </h5>
            </div>
            <div className="event-row">
              <h5>
                <span className="event-row-title">Candidate:</span>{' '}
                {event.candidate.name} {event.candidate.surname}
              </h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventsListItems;
