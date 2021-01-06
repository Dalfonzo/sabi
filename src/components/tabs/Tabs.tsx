import React, { Dispatch, SetStateAction } from 'react';
import styles from './styles.module.scss';

interface Props {
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<any>>;
  options: string[];
}

const Tabs: React.FC<Props> = ({ selectedTab, setSelectedTab, options }) => {
  return (
    <ul className={styles.tabs}>
      {options.map((el, index) => (
        <li
          onClick={() => {
            setSelectedTab(options.indexOf(el));
          }}
          className={`${styles.tab_option} ${
            selectedTab === options.indexOf(el) ? styles.selected : null
          }`}
          key={index}
        >
          {el}
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
