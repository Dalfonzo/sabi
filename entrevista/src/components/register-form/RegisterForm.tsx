import React, { useState } from 'react';
import Header from '../header/Header';
const RegisterForm = () => {
  const [step, setStep] = useState(1);

  const previousStep = () => {
    setStep(prevState => prevState - 1 || 1);
  };

  const nextStep = () => {
    setStep(prevState => prevState + 1);
  };

  return (
    <div>
      register Form
      <Header step={step} previousState={previousStep} />
    </div>
  );
};

export default RegisterForm;
