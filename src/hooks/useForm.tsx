import React, { Dispatch, SetStateAction } from 'react';
import formValidation from '../validations/formValidation';

interface useFormInterface {
  (
    nextStep: () => void,
    values: any,
    setValues: Dispatch<SetStateAction<any>>,
    error: any,
    setError: Dispatch<SetStateAction<any>>,
    fn?: () => void
  ): any;
}

const useForm: useFormInterface = (
  values,
  nextStep,
  setValues,
  error,
  setError,
  fn
) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
    if (fn) {
      fn();
    }
  };

  const onChangeHandler = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const currentValue = e.target.value.replace(/\s/g, '');

    setValues({ ...values, [name]: currentValue });
    // Validacion
    formValidation(name, currentValue, error, setError, values);
  };

  return [onChangeHandler, onSubmitHandler];
};

export default useForm;
