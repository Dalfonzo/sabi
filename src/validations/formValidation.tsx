import { Dispatch, SetStateAction } from 'react';

interface formValidationInterface {
  (
    name: string,
    currentValue: string,
    error: any,
    setError: Dispatch<SetStateAction<any>>,
    values: any
  ): void;
}

const formValidation: formValidationInterface = (
  name,
  currentValue,
  error,
  setError,
  values
) => {
  let isValid = true;
  let errorMsg = '';
  let passConfError = `Las contraseñas no coinciden`;
  let aux = true;

  if (currentValue) {
    switch (name) {
      case 'email':
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = emailRegex.test(String(currentValue).toLowerCase());
        errorMsg = 'Ingresa una dirección de correo válida';
        break;
      case 'phoneNumber':
        const phoneNumberRegex = /^\+([0-9]{2})\)?[ ]?([1-9]{3})[ ]?([0-9]{3})[ ]?([0-9]{4})$/;
        isValid = phoneNumberRegex.test(currentValue);
        errorMsg = 'Ingresa un número de teléfono válido';
        break;
      case 'code':
        const codeRegex = /^[0-9]{6}$/;
        isValid = codeRegex.test(currentValue);
        errorMsg = 'Código inválido';
        break;
      case 'username':
        isValid = currentValue !== 'sabiapp';
        errorMsg = `El nombre de usuario ${currentValue} no está disponible`;
        break;
      case 'password':
        isValid = currentValue.length > 6;
        errorMsg = `Tu contraseña debe ser mayor a 6 dígitos`;
        aux = currentValue === values.passwordConfirmation;
        break;
      case 'passwordConfirmation':
        isValid = currentValue === values.password;
        errorMsg = passConfError;
        break;
    }
  }
  setError({
    ...error,
    // Caso especial para asegurar que tanto password y su confirmacion sean iguales
    passwordConfirmation: !aux && name === 'password' ? passConfError : '',
    [name]: isValid ? '' : errorMsg,
  });
};

export default formValidation;
