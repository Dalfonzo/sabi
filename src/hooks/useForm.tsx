import React, { Dispatch, SetStateAction } from 'react';

interface useFormInterface {
  (
    values: any,
    nextStep: () => void,
    setValues: Dispatch<SetStateAction<any>>
  ): any;
}

const useForm: useFormInterface = (values, nextStep, setValues) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    nextStep();
  };

  const onChangeHandler = (name: string) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: e.target.value });
  };

  return [onChangeHandler, onSubmitHandler];
};

export default useForm;
