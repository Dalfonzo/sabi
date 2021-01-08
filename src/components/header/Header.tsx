import React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/left-arrow.svg';
import styles from './styles.module.scss';

interface Props {
  step: number;
  previousState: () => void;
}

const Header: React.FC<Props> = ({ step, previousState }) => {
  const back = (
    <span className={styles.back_btn}>
      <Arrow className={styles.icon} /> Atrás
    </span>
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.back} onClick={previousState}>
          {step < 4 ? back : ''}
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
