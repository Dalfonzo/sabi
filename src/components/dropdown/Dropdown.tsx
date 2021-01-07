import React from 'react';
import styles from './styles.module.scss';

// dummy data  para demostracion
const options = ['español', 'ingles', 'frances', 'aleman'];

const Dropdown = () => {
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    // Obtenemos el valor y hacemos algo con él
    const target = e.target as HTMLInputElement;
    console.log(target.value);
  };

  return (
    <div className={styles.container} onChange={onChangeHandler}>
      <select name="languages">
        {options &&
          options.map((el, i) => (
            <option key={i} value={el}>
              {el}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
