import React, { useState } from 'react';
import Header from '../header/Header';
import UserContactInfo from '../register-form-steps/UserContactInfo';
import UserAuth from '../register-form-steps/UserCode';
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
          />
        );
      case 2:
        return (
          <UserAuth nextStep={nextStep} values={values} setValues={setValues} />
        );
      case 3:
        return (
          <UserDetails
            nextStep={nextStep}
            values={values}
            setValues={setValues}
          />
        );
    }
  };

  return (
    <div>
      <Header step={step} previousState={previousStep} />
      {renderView(step)}
      <h1>{step}</h1>
    </div>
  );
};

export default RegisterForm;
