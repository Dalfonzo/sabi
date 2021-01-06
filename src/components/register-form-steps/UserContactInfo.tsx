import React, { useState, Dispatch, SetStateAction } from 'react';
import Tabs from '../tabs/Tabs';
import useForm from '../../hooks/useForm';
import styles from './styles.module.scss';

interface Props {
  nextStep: () => void;
  values: any;
  setValues: Dispatch<SetStateAction<any>>;
  error: any;
  setError: Dispatch<SetStateAction<any>>;
}

const UserContactInfo: React.FC<Props> = ({
  values,
  nextStep,
  setValues,
  error,
  setError,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [onChangeHandler, onSubmitHandler] = useForm(
    values,
    nextStep,
    setValues,
    error,
    setError
  );

  const renderForm = (selected: number) => {
    switch (selected) {
      case 0:
        return (
          <>
            <input
              type="text"
              onChange={onChangeHandler('phoneNumber')}
              placeholder="Numero de Telefono"
              value={values.phoneNumber}
              className={error.phoneNumber ? styles.input_error : ''}
            />
            {error.phoneNumber && <p>{error.phoneNumber}</p>}
            <p className={styles.secondary_text}>
              Recibirás un código via SMS para confirmar tu numero en cualquier
              momento
            </p>
          </>
        );
      case 1:
        return (
          <>
            <input
              type="email"
              onChange={onChangeHandler('email')}
              placeholder="Correo Electronico"
              value={values.email}
              className={error.email ? styles.input_error : ''}
            />
            {error.email && <p>{error.email}</p>}
            <p className={styles.secondary_text}>
              Recibirás un código de verificación a esta dirección de correo
              electrónico
            </p>
          </>
        );
    }
  };

  return (
    <div className={styles.container}>
      <div>Dropdown</div>
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        options={['Teléfono', 'Correo']}
      />
      <form onSubmit={onSubmitHandler}>
        {renderForm(selectedTab)}
        <input
          type="submit"
          value="Siguiente"
          className={`${styles.filled_btn} ${
            error.phoneNumber ||
            error.email ||
            (!values.phoneNumber && !values.email)
              ? styles.inactive_btn
              : null
          }`}
          disabled={
            error.phoneNumber ||
            error.email ||
            (!values.phoneNumber && !values.email)
          }
        />
      </form>
    </div>
  );
};

export default UserContactInfo;
