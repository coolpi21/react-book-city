import React from 'react';

import Header from '@/pages/home/components/header';
import styles from './index.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <Header />
      home
    </div>
  );
};

export default Home;
