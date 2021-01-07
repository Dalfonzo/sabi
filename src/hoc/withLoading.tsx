import React from 'react';
import Loading from '../components/loading/Loading';

const withLoading = (Component: any) => (props: any) => {
  const { loading } = props;
  return <div>{loading ? <Loading /> : <Component {...props} />}</div>;
};

export default withLoading;
