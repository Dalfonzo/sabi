import React, { useState, useEffect } from 'react';
import DisplayData from '../display-data/DisplayData';
import withLoading from '../../hoc/withLoading';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const DisplayDataWithLoading = withLoading(DisplayData);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const resJSON = await res.json();
      setData(resJSON);
      setLoading(false);
    } catch (e) {
      alert('Hubo un problema con el fetch');
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return <DisplayDataWithLoading loading={loading} data={data} />;
};

export default Home;
