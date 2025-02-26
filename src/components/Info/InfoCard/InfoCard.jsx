import React from 'react';
import TruckIcon from '@icons/svgs/truckIcon.svg';
import styles from '../styles.module.scss';

const InfoCard = ({ content, description, src }) => {
  const { containerCard, containerContent, title, des } = styles;

  return (
    <div className={containerCard}>
      <img width={40} height={40} src={src} alt={src} />
      <div className={containerContent}>
        <div className={title}>{content}</div>
        <div className={des}>{description}</div>
      </div>
    </div>
  );
};

export default InfoCard;
