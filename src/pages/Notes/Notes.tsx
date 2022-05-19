import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import './Notes.scss';

import { getEventsResponsesAction } from '../../store/actions/eventResponseActions';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

const Notes: FC = () => {
  const user = useTypedSelector((state) => state.user);
  const { eventResponse, loading } = useTypedSelector(
    (state) => state.eventsResponse,
  );

  const dispatch = useDispatch();

  const userId = user?.userId.toString();

  useEffect(() => {
    if (userId) {
      dispatch(getEventsResponsesAction(userId));
    }
  }, [dispatch, userId]);

  return (
    <div
      className="notes-list-container"
      style={{ opacity: loading ? 0.5 : 1 }}>
      {loading && <LoadingAnimation />}
      <h2 className="notes-header">Notes</h2>
      <div className="notes-list-block">
        <ul className="notes-list">
          {eventResponse?.map((res) => (
            <li key={res.id}>{res.responseContent}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notes;
