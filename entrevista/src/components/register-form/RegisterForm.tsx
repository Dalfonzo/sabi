import React, { useState } from 'react';
import Header from '../header/Header';
import UserContactInfo from '../register-form-steps/UserContactInfo';

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({ phone: '', email: '' });

  const previousStep = () => {
    setStep((prevState) => prevState - 1 || 1);
  };

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  return (
    <div>
      <Header step={step} previousState={previousStep} />
      <UserContactInfo
        nextStep={nextStep}
        values={values}
        setValues={setValues}
      />
      <h1>{step}</h1>
    </div>
  );
};

export default RegisterForm;
