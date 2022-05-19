import React, { FC, useState } from 'react';

import Input from '../Input/Input';
import './EventResponseForm.scss';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addEventResponseAction } from '../../store/actions/eventResponseActions';

interface EventResponseFormProps {
  toggleResponseForm: () => void;
}

const EventResponseForm: FC<EventResponseFormProps> = ({
  toggleResponseForm,
}) => {
  const [eventResponse, setEventResponse] = useState({
    response: '',
  });

  const dispatch = useDispatch();

  const { id } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEventResponse({ response: e.target.value });
  };

  const addEventResponse = () => {
    if (id) {
      dispatch(addEventResponseAction(id, eventResponse.response));
    }
    toggleResponseForm();
  };

  return (
    <div className="event-response-form-container">
      <Input
        className="event-response-form-form-input"
        labelName="Event Response"
        type="text"
        id="eventResponse"
        placeholder="Event response..."
        value={eventResponse.response}
        onChange={handleChange}
      />
      <button onClick={addEventResponse} className="event-response-form-button">
        Add Event Response
      </button>
    </div>
  );
};

export default EventResponseForm;
