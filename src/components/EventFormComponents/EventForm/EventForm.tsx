import React, { useEffect, useState } from 'react';

import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useSelectInputField } from '../../../hooks/useSelectInputField';

import { useNavigate } from 'react-router-dom';
import { EVENTS_ROUTE } from '../../../routes/routesPath';

import { useDispatch } from 'react-redux';
import { getProfilesListAction } from '../../../store/actions/profilesActions';
import { getCandidatesListAction } from '../../../store/actions/candidatesActions';
import { getCategoriesListAction } from '../../../store/actions/categoriesActions';
import { addEventAction } from '../../../store/actions/eventsActions';

import EventsFormHeader from '../EventFormHeader/EventFormHeader';
import DateTimePickerSelect from '../DateTimePickerSelect/DateTimePickerSelect';
import DropDownSelect from '../DropDownSelect/DropDownSelect';
import './EventForm.scss';

const EventForm = () => {
  const { profiles, candidates, categories } = useTypedSelector(
    (state) => state,
  );

  const [selectedDate, setDate] = useState<Date | null>(new Date());

  const [selectedParticipant, setSelectedParticipant] =
    useSelectInputField(null);

  const [selectedCandidate, setSelectedCandidate] = useSelectInputField(null);

  const [selectedCategory, setSelectedCategory] = useSelectInputField(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfilesListAction());
    dispatch(getCandidatesListAction());
    dispatch(getCategoriesListAction());
  }, [dispatch]);

  const participantsList = profiles.profiles?.map(
    ({ name, surname, email }) => ({
      label: `${name} ${surname} (${email})`,
      value: `${name} ${surname} (${email})`,
    }),
  );

  const candidatesList = candidates.candidates?.map(
    ({ name, surname, email }) => ({
      label: `${name} ${surname} (${email})`,
      value: `${name} ${surname} (${email})`,
    }),
  );

  const categoriesList = categories.categories?.map(({ name }) => ({
    label: `${name}`,
    value: `${name}`,
  }));

  const handleAddEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addEventAction(
        selectedDate?.toLocaleString(),
        selectedParticipant?.selectedOption?.value,
        selectedCandidate?.selectedOption?.value,
        selectedCategory?.selectedOption?.value,
      ),
    );
    navigate(EVENTS_ROUTE);
  };

  return (
    <div className="events-form-container">
      <EventsFormHeader />
      <form>
        <DateTimePickerSelect
          label="Date"
          selectedDate={selectedDate}
          setDate={setDate}
        />
        <DropDownSelect
          label="Participant"
          placeholder="Choose participant"
          values={participantsList}
          selectedValue={selectedParticipant?.selectedOption}
          setValue={setSelectedParticipant}
        />
        <DropDownSelect
          label="Candidate"
          placeholder="Choose candidate"
          values={candidatesList}
          selectedValue={selectedCandidate?.selectedOption}
          setValue={setSelectedCandidate}
        />
        <DropDownSelect
          label="Category"
          placeholder="Choose category"
          values={categoriesList}
          selectedValue={selectedCategory?.selectedOption}
          setValue={setSelectedCategory}
        />
        <button type="submit" onClick={handleAddEvent}>
          Add event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
