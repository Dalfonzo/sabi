import React, { useState, Dispatch, SetStateAction } from 'react';
import Tabs from '../tabs/Tabs';
import useForm from '../../hooks/useForm';
import styles from './styles.module.scss';

interface Props {
  nextStep: () => void;
  setValues: Dispatch<SetStateAction<any>>;
  values: any;
}

const UserContactInfo: React.FC<Props> = ({ values, nextStep, setValues }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [onChangeHandler, onSubmitHandler] = useForm(
    values,
    nextStep,
    setValues
  );

  const renderForm = (selected: number) => {
    switch (selected) {
      case 0:
        return (
          <>
            <input
              type="email"
              onChange={onChangeHandler('email')}
              placeholder="Correo Electronico"
              value={values.email}
            />
            <p className={styles.secondary_text}>
              Recibirás un código de verificación a esta dirección de correo
              electrónico
            </p>
          </>
        );
      case 1:
        return (
          <>
            <input
              type="text"
              onChange={onChangeHandler('phoneNumber')}
              placeholder="Numero de Telefono"
              value={values.phoneNumber}
            />
            <p className={styles.secondary_text}>
              Recibirás un código via SMS para confirmar tu numero en cualquier
              momento
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
          className={`${styles.filled_btn}`}
        />
      </form>
    </div>
  );
};

export default UserContactInfo;
