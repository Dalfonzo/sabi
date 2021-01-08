import React, { Dispatch, SetStateAction } from 'react';
import useForm from '../../hooks/useForm';
import Input from '../input/Input';
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
  const postData = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const resJSON = await res.json();
      console.log(resJSON);
    } catch (error) {
      alert('Hubo un problema con el post :(');
    }
  };

  const [onChangeHandler, onSubmitHandler] = useForm(
    values,
    nextStep,
    setValues,
    error,
    setError,
    postData
  );

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        Escoge un nombre de usuario y una contraseña
      </p>
      <p className={styles.secondary_text}>Puedes cambiarlos más tarde.</p>

      <form onSubmit={onSubmitHandler}>
        <Input
          values={values}
          error={error}
          onChangeHandler={onChangeHandler}
          name="username"
          placeholder="Nombre de usuario"
        />
        <Input
          values={values}
          error={error}
          onChangeHandler={onChangeHandler}
          name="password"
          placeholder="Contraseña"
          type="password"
        />
        <Input
          values={values}
          error={error}
          onChangeHandler={onChangeHandler}
          name="passwordConfirmation"
          placeholder="Confirma tu contraseña"
          type="password"
        />

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
