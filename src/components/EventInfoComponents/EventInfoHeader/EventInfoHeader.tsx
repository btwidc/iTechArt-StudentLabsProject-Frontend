import React, { FC } from 'react';

import { EventInfo } from '../../../types/eventTypes/EventInfo';

import EventParticipantInfo from '../EventParticipantInfo/EventParticipantInfo';
import EventCandidateInfo from '../EventCandidateInfo/EventCandidateInfo';

import './EventInfoHeader.scss';

interface EventInfoProps {
  event: EventInfo;
}

const EventInfoHeader: FC<EventInfoProps> = ({ event }) => {
  return (
    <div className="event-info-header-container">
      <EventParticipantInfo participant={event.profile} />
      <EventCandidateInfo candidate={event.candidate} />
    </div>
  );
};

export default EventInfoHeader;
