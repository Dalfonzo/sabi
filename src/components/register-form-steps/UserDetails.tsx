import React, { Dispatch, SetStateAction } from 'react';
import useForm from '../../hooks/useForm';
import styles from './styles.module.scss';

interface Props {
  nextStep: () => void;
  values: any;
  setValues: Dispatch<SetStateAction<any>>;
  error: any;
  setError: Dispatch<SetStateAction<any>>;
}

const UserDetails: React.FC<Props> = ({
  values,
  nextStep,
  setValues,
  error,
  setError,
}) => {
  const [onChangeHandler, onSubmitHandler] = useForm(
    values,
    nextStep,
    setValues,
    error,
    setError
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
        {error.username && <p>{error.username}</p>}

        <input
          type="password"
          onChange={onChangeHandler('password')}
          placeholder="contraseña"
          value={values.password}
        />
        {error.password && <p>{error.password}</p>}

        <input
          type="password"
          onChange={onChangeHandler('passwordConfirmation')}
          placeholder="confirma tu contraseña"
          value={values.passwordConfirmation}
        />
        {error.passwordConfirmation && <p>{error.passwordConfirmation}</p>}

        <input
          type="submit"
          value="Finalizar"
          className={`${styles.filled_btn} ${
            !values.username || !values.password || !values.passwordConfirmation
              ? styles.inactive_btn
              : null
          }`}
          disabled={
            !values.username || !values.password || !values.passwordConfirmation
          }
        />
      </form>
    </div>
  );
};

export default UserDetails;
