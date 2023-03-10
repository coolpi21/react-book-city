import React from 'react';

import Header from '@/pages/home/components/header';
import styles from './index.module.scss';

import { ErrorBlock } from '@/bases';
import Loading from '@/components/Loading';

import { useRequest } from '@/hooks/useRequest';
import api from '@/pages/home/api';

const Home: React.FC = () => {
  const { data, error } = useRequest({ url: api.getHomeData });

  if (error) {
    return <ErrorBlock />;
  }

  if (!data) {
    return <Loading />;
  }

  console.log(data);
  return (
    <div className={styles.home}>
      <Header />
      home
    </div>
  );
};

export default Home;
