import React, { FC } from 'react';

import { IUserProfileInfo } from '../../../types/authTypes/requests/IUserProfileInfo';

import ProfileRow from '../../ProfileRow/ProfileRow';
import './EventParticipantInfo.scss';

interface EventParticipantInfoProps {
  participant: IUserProfileInfo;
}

const EventParticipantInfo: FC<EventParticipantInfoProps> = ({
  participant,
}) => {
  return (
    <div className="participant-container">
      <h2>Participant</h2>
      <ProfileRow labelName="Name:" rowInfo={participant.name} />
      <ProfileRow labelName="Surname:" rowInfo={participant.surname} />
      <ProfileRow labelName="Email:" rowInfo={participant.email} />
      <ProfileRow labelName="Skype:" rowInfo={participant.skype} />
      <ProfileRow labelName="Department:" rowInfo={participant.department} />
      <ProfileRow labelName="Experience:" rowInfo={participant.ageExperience} />
      <ProfileRow labelName="Summary:" rowInfo={participant.summary} />
    </div>
  );
};

export default EventParticipantInfo;
