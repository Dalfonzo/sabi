import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

interface Props {
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<any>>;
}

const Tabs: React.FC<Props> = ({ selectedTab, setSelectedTab }) => {
  return (
    <ul className={styles.tabs}>
      <li
        onClick={() => {
          setSelectedTab(0);
        }}
        className={`${styles.tab_option} ${
          !selectedTab ? styles.selected : null
        }`}
      >
        Telefono
      </li>
      <li
        onClick={() => {
          setSelectedTab(1);
        }}
        className={`${styles.tab_option} ${
          selectedTab ? styles.selected : null
        }`}
      >
        Correo
      </li>
    </ul>
  );
};

export default Tabs;
