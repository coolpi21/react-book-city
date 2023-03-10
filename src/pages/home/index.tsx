import React from 'react';

import Header from '@/pages/home/components/header';
import styles from './index.module.scss';

import { useRequest } from '@/hooks/useRequest';
import api from '@/pages/home/api/index';

const Home: React.FC = () => {
  const { data, error } = useRequest({ url: api.getHomeData });

  if (error) {
    return <>error block</>;
  }

  if (!data) {
    return <>Loading</>;
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
