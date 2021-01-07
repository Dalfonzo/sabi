import React from 'react';
import styles from './styles.module.scss';

interface Props {
  data: any;
}

const DisplayData: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data &&
        data.map((el: any) => (
          <div className={styles.card} key={el.id}>
            <img
              src={`https://robohash.org/${el.id}?size=150x150`}
              alt="avatar"
              className={styles.avatar}
            />
            <p className={styles.text}>{el.name}</p>
          </div>
        ))}
    </div>
  );
};

export default DisplayData;
