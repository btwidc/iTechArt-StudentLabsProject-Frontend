import React, { FC, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { getEventsListAction } from '../../../store/actions/eventsActions';

import EventsListHeader from '../../../components/EventsListComponents/EventsListHeader/EventsListHeader';
import EventsListItems from '../../../components/EventsListComponents/EventsListItems/EventsListItems';
import LoadingAnimation from '../../../components/LoadingAnimation/LoadingAnimation';
import './EventsList.scss';

const EventsList: FC = () => {
  const { loading } = useTypedSelector((state) => state.events);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventsListAction());
  }, [dispatch]);

  return (
    <div
      className="events-list-container"
      style={{ opacity: loading ? 0.5 : 1 }}>
      {loading && <LoadingAnimation />}
      <EventsListHeader />
      <EventsListItems />
    </div>
  );
};

export default EventsList;
