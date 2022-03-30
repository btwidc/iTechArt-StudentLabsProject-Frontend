import React, { useEffect, useState } from 'react';
import { SingleValue } from 'react-select';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { useNavigate } from 'react-router-dom';
import { EVENTS_ROUTE } from '../../../routes/routesPath';

import { useDispatch } from 'react-redux';
import { getProfilesListAction } from '../../../store/actions/profilesActions';
import { getCandidatesListAction } from '../../../store/actions/candidatesActions';
import { getCategoriesListAction } from '../../../store/actions/categoriesActions';
import { addEventAction } from '../../../store/actions/eventsActions';

import DropDownSelect, {
  Participant,
  ParticipantSelectState,
  Candidate,
  CandidateSelectState,
  Category,
  CategorySelectState,
} from '../DropDownSelect/DropDownSelect';

import EventsFormHeader from '../EventFormHeader/EventFormHeader';
import DateTimePickerSelect from '../DateTimePickerSelect/DateTimePickerSelect';
import './EventForm.scss';

const EventForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProfilesListAction());
    dispatch(getCandidatesListAction());
    dispatch(getCategoriesListAction());
  }, [dispatch]);

  const { profiles } = useTypedSelector((state) => state.profiles);
  const { candidates } = useTypedSelector((state) => state.candidates);
  const { categories } = useTypedSelector((state) => state.categories);

  const [selectedDate, setDate] = useState<Date | null>(new Date());

  const participantsList: Participant[] | undefined = profiles?.map(
    (profile) => ({
      label: `${profile.name} ${profile.surname} (${profile.email})`,
      value: `${profile.name} ${profile.surname} (${profile.email})`,
    }),
  );

  const [selectedParticipant, setParticipant] =
    React.useState<ParticipantSelectState>();

  const handleParticipantSelect = (option: SingleValue<Participant>) => {
    setParticipant({
      selectedParticipant: option,
    });
  };

  const candidatesList: Candidate[] | undefined = candidates?.map(
    (candidate) => ({
      label: `${candidate.name} ${candidate.surname} (${candidate.email})`,
      value: `${candidate.name} ${candidate.surname} (${candidate.email})`,
    }),
  );

  const [selectedCandidate, setCandidate] =
    React.useState<CandidateSelectState>();

  const handleCandidateSelect = (option: SingleValue<Candidate>) => {
    setCandidate({
      selectedCandidate: option,
    });
  };

  const categoriesList: Category[] | undefined = categories?.map(
    (category) => ({
      label: `${category.name}`,
      value: `${category.name}`,
    }),
  );

  const [selectedCategory, setCategory] = React.useState<CategorySelectState>();

  const handleCategorySelect = (option: SingleValue<Category>) => {
    setCategory({
      selectedCategory: option,
    });
  };

  const handleAddEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      addEventAction(
        selectedDate?.toLocaleString(),
        selectedParticipant?.selectedParticipant?.value,
        selectedCandidate?.selectedCandidate?.value,
        selectedCategory?.selectedCategory?.value,
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
          selectedValue={selectedParticipant?.selectedParticipant}
          setValue={handleParticipantSelect}
        />
        <DropDownSelect
          label="Candidate"
          placeholder="Choose candidate"
          values={candidatesList}
          selectedValue={selectedCandidate?.selectedCandidate}
          setValue={handleCandidateSelect}
        />
        <DropDownSelect
          label="Category"
          placeholder="Choose category"
          values={categoriesList}
          selectedValue={selectedCategory?.selectedCategory}
          setValue={handleCategorySelect}
        />
        <button type="submit" onClick={handleAddEvent}>
          Add event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
