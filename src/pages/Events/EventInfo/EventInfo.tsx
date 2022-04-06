import React, { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { useDispatch } from 'react-redux';
import { getEventAction } from '../../../store/actions/eventsActions';

import EventsList from '../EventsList/EventsList';
import LoadingAnimation from '../../../components/LoadingAnimation/LoadingAnimation';
import './EventInfo.scss';

const EventInfo: FC = () => {
  const { loading, event } = useTypedSelector((state) => state.events);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getEventAction(id));
    }
  }, [dispatch, id]);

  if (!event) {
    return <EventsList />;
  }

  return (
    <div style={{ opacity: loading ? 0.5 : 1 }}>
      {loading && <LoadingAnimation />}
    </div>
  );
};

export default EventInfo;
