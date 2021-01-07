import React, { useState, Dispatch, SetStateAction } from 'react';
import Tabs from '../tabs/Tabs';
import Input from '../input/Input';
import useForm from '../../hooks/useForm';
import Dropdown from '../dropdown/Dropdown';
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
            <Input
              values={values}
              error={error}
              onChangeHandler={onChangeHandler}
              name="phoneNumber"
              placeholder="Numero de Telefono"
            />
            <p className={styles.secondary_text}>
              Recibirás un código via SMS para confirmar tu numero en cualquier
              momento
            </p>
          </>
        );
      case 1:
        return (
          <>
            <Input
              values={values}
              error={error}
              onChangeHandler={onChangeHandler}
              name="email"
              placeholder="Correo Electronico"
              type="email"
            />
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
      <Dropdown />
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
