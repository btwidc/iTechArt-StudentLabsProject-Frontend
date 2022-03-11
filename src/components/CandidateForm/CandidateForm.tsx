import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addCandidateAction } from '../../store/actions/candidatesActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { ToggleModalProps } from '../../types/propsTypes/ToggleModalProps';

import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import Input from '../../components/Input/Input';
import FileInput from './FileInput/FileInput';
import './CandidateForm.scss';

const CandidateForm = ({ toggleModal }: ToggleModalProps) => {
  const dispatch = useDispatch();

  const isLoading = useTypedSelector((state) => state.user.loading);

  const [candidateFormState, setCandidateFormState] = useState({
    name: '',
    surname: '',
    email: '',
    skype: '',
    phone: '',
    education: '',
    technology: '',
  });

  const [cvState, setCvState] = useState<File>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCandidateFormState({
      ...candidateFormState,
      [e.target.id]: e.target.value,
    });
  };

  const fileSelectedHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const files = (e.target as HTMLInputElement).files;
    if (files && files.length > 0) {
      setCvState(files[0]);
    }
  };

  const handleAddProfileInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('name', candidateFormState.name);
    formData.append('surname', candidateFormState.surname);
    formData.append('email', candidateFormState.email);
    formData.append('skype', candidateFormState.skype);
    formData.append('phone', candidateFormState.phone);
    formData.append('education', candidateFormState.education);
    formData.append('technology', candidateFormState.technology);
    formData.append('cv', cvState as File);
    dispatch(addCandidateAction(formData));
    setCandidateFormState({
      name: '',
      surname: '',
      email: '',
      skype: '',
      phone: '',
      education: '',
      technology: '',
    });
    toggleModal();
  };

  return (
    <div className="candidates-info-page">
      <div
        className="candidates-info-form-container"
        style={{ opacity: isLoading ? 0.7 : 1 }}>
        <div className="candidates-info-form">
          <form
            className="candidates-info-form-content"
            encType="multipart/form-data">
            {isLoading && <LoadingAnimation />}
            <Input
              className="auth-form-profile-item"
              labelName="Name"
              type="text"
              id="name"
              placeholder="Name"
              value={candidateFormState.name}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="Surname"
              type="text"
              id="surname"
              placeholder="Surname"
              value={candidateFormState.surname}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="E-mail"
              type="text"
              id="email"
              placeholder="Email"
              value={candidateFormState.email}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="Skype"
              type="text"
              id="skype"
              placeholder="Skype"
              value={candidateFormState.skype}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="Phone"
              type="text"
              id="phone"
              placeholder="Phone"
              value={candidateFormState.phone}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="Education"
              type="text"
              id="education"
              placeholder="Education"
              value={candidateFormState.education}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="Technology"
              type="text"
              id="technology"
              placeholder="Technology"
              value={candidateFormState.technology}
              onChange={handleChange}
            />
            <FileInput
              id="cv"
              type="file"
              name="cv"
              onChange={fileSelectedHandler}
            />
            <div className="candidates-form-button-field">
              <button
                type="submit"
                className="candidates-form-button"
                onClick={handleAddProfileInfo}>
                Add candidate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CandidateForm;
