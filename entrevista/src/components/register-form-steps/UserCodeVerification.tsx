import React, { Dispatch, SetStateAction } from 'react';
import useForm from '../../hooks/useForm';

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
    <div>
      <p>Ingresa tu código de verificación</p>
      <p>Ingresa el codigo enviado a {values.email || values.phoneNumber}</p>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={onChangeHandler('code')}
          placeholder="Código de Confirmación"
          value={values.code}
        />
        <input type="submit" value="confirmar código" />
      </form>
      <p>¿No has recibido tu código de confirmación?</p>
      <button>Volver a enviar codigo</button>
    </div>
  );
};

export default UserCode;
