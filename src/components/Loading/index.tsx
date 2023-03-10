import { SpinnerLoading } from '@/bases';
import styles from '@/components/Loading/index.module.scss';
import React from 'react';

const Loading: React.FC = React.memo(() => {
  return (
    <div className={styles.loading}>
      <SpinnerLoading size={42} color="white" />
    </div>
  );
});

export default Loading;
