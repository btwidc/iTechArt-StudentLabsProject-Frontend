import React, { FC, useState } from 'react';

import { useDispatch } from 'react-redux';
import { addProfileInfo } from '../../store/actions/userActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import Input from '../../components/Input/Input';
import './ProfileForm.scss';

const ProfileForm: FC = () => {
  const dispatch = useDispatch();

  const isLoading = useTypedSelector((state) => state.user.loading);

  const [profileFormState, setProfileFormState] = useState({
    name: '',
    surname: '',
    email: '',
    skype: '',
    ageExperience: 0,
    department: '',
    summary: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setProfileFormState({ ...profileFormState, [e.target.id]: e.target.value });
  };

  const handleAddProfileInfo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addProfileInfo(profileFormState));
    setProfileFormState({
      name: '',
      surname: '',
      email: '',
      skype: '',
      ageExperience: 0,
      department: '',
      summary: '',
    });
  };

  return (
    <div className="auth-profile-info-page">
      <div
        className="auth-profile-info-form-container"
        style={{ opacity: isLoading ? 0.7 : 1 }}>
        <div className="auth-profile-info-form">
          <form className="auth-profile-info-form-content">
            {isLoading && <LoadingAnimation />}
            <span className="auth-profile-info-form-title">Profile Info</span>
            <Input
              className="auth-form-profile-item"
              labelName="Name"
              type="text"
              id="name"
              placeholder="Name"
              value={profileFormState.name}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="Surname"
              type="text"
              id="surname"
              placeholder="Surname"
              value={profileFormState.surname}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="E-mail"
              type="text"
              id="email"
              placeholder="Email"
              value={profileFormState.email}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="Skype"
              type="text"
              id="skype"
              placeholder="Skype"
              value={profileFormState.skype}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="Age experience"
              type="number"
              id="ageExperience"
              placeholder="Age experience"
              value={profileFormState.ageExperience.toString()}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-item"
              labelName="Department"
              type="text"
              id="department"
              placeholder="Department"
              value={profileFormState.department}
              onChange={handleChange}
            />
            <Input
              className="auth-form-profile-summary"
              labelName="Summary"
              type="text"
              id="summary"
              placeholder="Summary"
              value={profileFormState.summary}
              onChange={handleChange}
            />
            <div className="auth-form-profile-button-field">
              <button
                type="submit"
                className="auth-form-profile-button"
                onClick={handleAddProfileInfo}>
                Add profile info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
