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

const UserCode: React.FC<Props> = ({
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
      <p className={styles.title}>Ingresa tu código de verificación</p>
      <p className={styles.secondary_text}>
        Ingresa el codigo enviado a {values.email || values.phoneNumber}
      </p>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={onChangeHandler('code')}
          placeholder="Código de Confirmación"
          value={values.code}
          className={error.code ? styles.input_error : ''}
        />
        {error.code && <p>{error.code}</p>}
        <input
          type="submit"
          value="Confirmar código"
          className={`${styles.filled_btn} ${
            !values.code ? styles.inactive_btn : null
          }`}
          disabled={!values.code}
        />
      </form>
      <p className={styles.primary_text}>
        ¿No has recibido tu código de confirmación?
      </p>
      <button className={styles.empty_btn}>Volver a enviar codigo</button>
    </div>
  );
};

export default UserCode;
