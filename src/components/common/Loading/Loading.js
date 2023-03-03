import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.face}>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.face}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
};

export default Loading;