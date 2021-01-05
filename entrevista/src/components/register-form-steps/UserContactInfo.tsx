import React, { useState, Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

interface Props {
  nextStep: () => void;
  setValues: Dispatch<SetStateAction<any>>;
  values: any;
}

const UserContactInfo: React.FC<Props> = ({ values, nextStep, setValues }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  const onChangeHandler = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const renderForm = (selected: number) => {
    if (selected) {
      return (
        <>
          <input
            type="email"
            name="email"
            onChange={onChangeHandler('email')}
            placeholder="Correo Electronico"
            value={values.email}
          />
          <p>
            Recibirás un código de verificación a esta dirección de correo
            electrónico
          </p>
        </>
      );
    }
    return (
      <>
        <input
          type="text"
          name="phone"
          onChange={onChangeHandler('phone')}
          placeholder="Numero de Telefono"
          value={values.phone}
        />
        <p>
          Recibirás un código via SMS para confirmar tu numero en cualquier
          momento
        </p>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div>Dropdown</div>

      <ul className={styles.tabs}>
        <li
          onClick={() => {
            setSelectedTab(0);
          }}
          className={`${styles.tab_option} ${
            !selectedTab ? styles.selected : null
          }`}
        >
          Telefono
        </li>
        <li
          onClick={() => {
            setSelectedTab(1);
          }}
          className={`${styles.tab_option} ${
            selectedTab ? styles.selected : null
          }`}
        >
          Correo
        </li>
      </ul>
      <form onSubmit={onSubmitHandler}>
        {renderForm(selectedTab)}
        <input type="submit" value="Siguiente" />
      </form>
    </div>
  );
};

export default UserContactInfo;
