import React from 'react';
import styles from './styles.module.scss';

interface Props {
  step: number;
  previousState: () => void;
}

const Header: React.FC<Props> = ({ step, previousState }) => {
  return (
    <div className={styles.container}>
      <div className={styles.btn} onClick={previousState}>
        Atras
      </div>
      <div className={styles.highlight}>Registro</div>
      <div>{step}/3</div>
    </div>
  );
};

export default Header;
