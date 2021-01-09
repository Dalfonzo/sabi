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
  const renderTitle = () => {
    if (values.email) {
      return 'Verifica tu correo electrónico';
    }
    return 'Ingresa tu código de verificación';
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{renderTitle()}</p>
      <p className={styles.secondary_text}>
        Ingresa el código enviado a <br />
        {values.email || values.phoneNumber}
      </p>
      <form onSubmit={onSubmitHandler}>
        <Input
          values={values}
          error={error}
          onChangeHandler={onChangeHandler}
          name="code"
          placeholder="Código de confirmación"
        />
        <input
          type="submit"
          value="Confirmar código"
          className={`${styles.filled_btn} ${
            error.code || !values.code ? styles.inactive_btn : null
          }`}
          disabled={error.code || !values.code}
        />
      </form>
      <p className={styles.primary_text}>
        ¿No has recibido tu código de confirmación?
      </p>
      <button className={styles.empty_btn}>Volver a enviar código</button>
    </div>
  );
};

export default UserCode;
