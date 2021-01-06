import React, { Dispatch, SetStateAction } from 'react';
import useForm from '../../hooks/useForm';
import styles from './styles.module.scss';

interface Props {
  nextStep: () => void;
  setValues: Dispatch<SetStateAction<any>>;
  values: any;
}

const UserCode: React.FC<Props> = ({ values, nextStep, setValues }) => {
  const [onChangeHandler, onSubmitHandler] = useForm(
    values,
    nextStep,
    setValues
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
        />
        <input
          type="submit"
          value="confirmar código"
          className={styles.filled_btn}
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
