import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <h2>header</h2>
      </div>
      <div className={styles.right}>
        <Link to="search">
          <i className="icon-search" />
        </Link>
        <Link to="shelf">
          <i className="icon-shelf" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
