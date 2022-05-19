import React, { FC, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { getEventAction } from '../../../store/actions/eventsActions';

import LoadingAnimation from '../../../components/LoadingAnimation/LoadingAnimation';
import EventsList from '../EventsList/EventsList';
import EventInfoHeader from '../../../components/EventInfoComponents/EventInfoHeader/EventInfoHeader';
import Timer from '../../../components/TimerComponents/Timer/Timer';
import EventResponseForm from '../../../components/EventResponseForm/EventResponseForm';
import './EventInfo.scss';

const EventInfo: FC = () => {
  const [showEventResponseForm, setShowEventResponseForm] = useState(false);
  const { loading, event } = useTypedSelector((state) => state.events);

  const dispatch = useDispatch();
  const { id } = useParams();

  const toggleEventResponseForm = () => {
    setShowEventResponseForm(!showEventResponseForm);
  };

  useEffect(() => {
    if (id) {
      dispatch(getEventAction(id));
    }
  }, [dispatch, id]);

  if (!event) {
    return <EventsList />;
  }

  return (
    <div
      className="events-info-container"
      style={{ opacity: loading ? 0.5 : 1 }}>
      <EventInfoHeader event={event} />
      {loading && <LoadingAnimation />}
      <Timer toggleResponseForm={toggleEventResponseForm} />
      {showEventResponseForm && (
        <EventResponseForm toggleResponseForm={toggleEventResponseForm} />
      )}
    </div>
  );
};

export default EventInfo;
