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
          className={error.username ? styles.input_error : ''}
        />
        {error.username && (
          <p className={styles.error_text}>{error.username}</p>
        )}

        <input
          type="password"
          onChange={onChangeHandler('password')}
          placeholder="Contraseña"
          value={values.password}
          className={error.password ? styles.input_error : ''}
        />
        {error.password && (
          <p className={styles.error_text}>{error.password}</p>
        )}

        <input
          type="password"
          onChange={onChangeHandler('passwordConfirmation')}
          placeholder="Confirma tu contraseña"
          value={values.passwordConfirmation}
          className={error.passwordConfirmation ? styles.input_error : ''}
        />
        {error.passwordConfirmation && (
          <p className={styles.error_text}>{error.passwordConfirmation}</p>
        )}

        <input
          type="submit"
          value="Finalizar"
          className={`${styles.filled_btn} ${
            error.username ||
            error.password ||
            error.passwordConfirmation ||
            !values.username ||
            !values.password ||
            !values.passwordConfirmation
              ? styles.inactive_btn
              : null
          }`}
          disabled={
            error.username ||
            error.password ||
            error.passwordConfirmation ||
            !values.username ||
            !values.password ||
            !values.passwordConfirmation
          }
        />
      </form>
    </div>
  );
};

export default UserDetails;
