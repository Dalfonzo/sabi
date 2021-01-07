import React from 'react';
import styles from './styles.module.scss';

interface Props {
  values: any;
  error: any;
  onChangeHandler: any;
  name: string;
  placeholder: string;
  type?: string;
}

const Input: React.FC<Props> = ({
  values,
  error,
  onChangeHandler,
  name,
  placeholder,
  type,
}) => {
  return (
    <>
      <input
        type={type ? type : 'text'}
        onChange={onChangeHandler(name)}
        placeholder={placeholder}
        value={values[name]}
        className={`${error[name] ? styles.input_error : ''} ${
          values[name] && !error[name] ? styles.success_check : ''
        }`}
      />
      {error[name] && <p className={styles.error_text}>{error[name]}</p>}
    </>
  );
};

export default Input;
