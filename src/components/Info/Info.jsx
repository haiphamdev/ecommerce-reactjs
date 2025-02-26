import MainLayout from '@components/Layout/Layout';
import React from 'react';
import { dataInfo } from './constants';
import InfoCard from './InfoCard/InfoCard';
import styles from './styles.module.scss';

const Info = () => {
  const { container } = styles;

  return (
    <MainLayout>
      <div className={container}>
        {dataInfo.map((item) => (
          <InfoCard content={item.title} description={item.description} src={item.src} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Info;
