import React, { useState } from 'react';
import Header from '../header/Header';
import UserContactInfo from '../register-form-steps/UserContactInfo';
import UserCodeVerification from '../register-form-steps/UserCodeVerification';
import UserDetails from '../register-form-steps/UserDetails';
import Home from '../home/Home';
import styles from './styles.module.scss';

const initValues = {
  phoneNumber: '',
  email: '',
  code: '',
  username: '',
  password: '',
  passwordConfirmation: '',
};

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initValues);
  const [error, setError] = useState(initValues);

  const previousStep = () => {
    setStep((prevState) => prevState - 1 || 1);
  };
// asdasd
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
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header step={step} previousState={previousStep} />
      <div className={styles.wrapper}>{renderView(step)}</div>
    </>
  );
};

export default RegisterForm;
