import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const DisplayData = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const resJSON = await res.json();
    setData(resJSON);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {data &&
        data.map((el: any) => (
          <div className={styles.card}>
            <img
              src={`https://robohash.org/${el.id}?size=150x150`}
              alt="avatar"
              className={styles.avatar}
            />
            <p key={el.id} className={styles.text}>
              {el.name}
            </p>
          </div>
        ))}
    </div>
  );
};

export default DisplayData;
