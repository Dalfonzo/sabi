import React from 'react';
import styles from './styles.module.scss';

interface Props {
  step: number;
  previousState: () => void;
}

const Header: React.FC<Props> = ({ step, previousState }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.back} onClick={previousState}>
          {step < 4 ? 'Atras' : ''}
        </div>
        <div className={styles.highlight}>
          {step < 4 ? `Registro` : `Bienvenido`}
        </div>
        <div>{step < 4 ? `${step}/3` : ''}</div>
      </div>
    </div>
  );
};

export default Header;
