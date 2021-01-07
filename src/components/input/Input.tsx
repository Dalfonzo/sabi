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
  const formatPhoneValue = () => {
    if (name === 'phoneNumber' && !error[name]) {
      return values[name].replace(/(.{3})/g, '$1 ').replace(/\s+(?=\S*$)/, '');
    }
    return values[name];
  };

  return (
    <>
      <input
        type={type ? type : 'text'}
        onChange={onChangeHandler(name)}
        placeholder={placeholder}
        value={formatPhoneValue()}
        className={`${error[name] ? styles.input_error : ''} ${
          values[name] && !error[name] ? styles.success_check : ''
        }`}
      />
      {error[name] && <p className={styles.error_text}>{error[name]}</p>}
    </>
  );
};

export default Input;
