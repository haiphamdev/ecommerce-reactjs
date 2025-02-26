import React from 'react';
import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';

const BoxIcon = ({ type, href }) => {
  const { boxIcon } = styles;

  const handleRender = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return insIcon;
      case 'ytb':
        return ytbIcon;
    }
  };

  return (
    <div className={boxIcon}>
      <img src={handleRender(type)} alt={type} />
    </div>
  );
};

export default BoxIcon;
