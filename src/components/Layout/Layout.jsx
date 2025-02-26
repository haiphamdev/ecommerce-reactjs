import React from 'react';
import styles from './styles.module.scss';

const MainLayout = ({ children }) => {
  const { wrapperLayout, container } = styles;
  return (
    <main className={wrapperLayout}>
      <div className={container}>{children}</div>
    </main>
  );
};

export default MainLayout;
