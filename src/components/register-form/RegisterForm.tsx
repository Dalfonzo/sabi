import React, { useState } from 'react';
import Header from '../header/Header';
import UserContactInfo from '../register-form-steps/UserContactInfo';
import UserCodeVerification from '../register-form-steps/UserCodeVerification';
import UserDetails from '../register-form-steps/UserDetails';

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    phoneNumber: '',
    email: '',
    code: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  });
  const [error, setError] = useState({
    phoneNumber: '',
    email: '',
    code: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  });

  const previousStep = () => {
    setStep((prevState) => prevState - 1 || 1);
  };

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const renderView = (selected: number) => {
    switch (selected) {
      case 1:
        return (
          <UserContactInfo
            nextStep={nextStep}
            values={values}
            setValues={setValues}
            error={error}
            setError={setError}
          />
        );
      case 2:
        return (
          <UserCodeVerification
            nextStep={nextStep}
            values={values}
            setValues={setValues}
            error={error}
            setError={setError}
          />
        );
      case 3:
        return (
          <UserDetails
            nextStep={nextStep}
            values={values}
            setValues={setValues}
            error={error}
            setError={setError}
          />
        );
    }
  };

  return (
    <div>
      <Header step={step} previousState={previousStep} />
      {renderView(step)}
    </div>
  );
};

export default RegisterForm;
