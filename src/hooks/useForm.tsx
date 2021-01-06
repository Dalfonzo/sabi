import React, { Dispatch, SetStateAction } from 'react';
import formValidation from '../validations/formValidation';

interface useFormInterface {
  (
    nextStep: () => void,
    values: any,
    setValues: Dispatch<SetStateAction<any>>,
    error: any,
    setError: Dispatch<SetStateAction<any>>
  ): any;
}

const useForm: useFormInterface = (
  values,
  nextStep,
  setValues,
  error,
  setError
) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  const onChangeHandler = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentValue = e.target.value;
    setValues({ ...values, [name]: currentValue });
    // Validacion
    formValidation(name, currentValue, error, setError, values);
  };

  return [onChangeHandler, onSubmitHandler];
};

export default useForm;
