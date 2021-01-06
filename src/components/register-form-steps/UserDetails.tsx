import React, { Dispatch, SetStateAction } from 'react';
import useForm from '../../hooks/useForm';
import styles from './styles.module.scss';

interface Props {
  nextStep: () => void;
  setValues: Dispatch<SetStateAction<any>>;
  values: any;
}

const UserDetails: React.FC<Props> = ({ values, nextStep, setValues }) => {
  const [onChangeHandler, onSubmitHandler] = useForm(
    values,
    nextStep,
    setValues
  );

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Escoge un nombre de usuario y una contraseña
      </p>
      <p className={styles.secondary_text}>puedes cambiarlos más tarde</p>

      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={onChangeHandler('username')}
          placeholder="Nombre de usuario"
          value={values.username}
        />
        <input
          type="password"
          onChange={onChangeHandler('password')}
          placeholder="contraseña"
          value={values.password}
        />
        <input
          type="password"
          onChange={onChangeHandler('passwordConfirmation')}
          placeholder="confirma tu contraseña"
          value={values.passwordConfirmation}
        />
        <input type="submit" value="Finalizar" className={styles.filled_btn} />
      </form>
    </div>
  );
};

export default UserDetails;
