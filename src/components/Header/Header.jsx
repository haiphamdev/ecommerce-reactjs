import React from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.png';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

const Header = () => {
  const { containerBoxIcon, containerMenu, container, containerHeader, containerBox } = styles;

  return (
    <div class={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item) => (
              <BoxIcon type={item.type} href={item.href} />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => (
              <Menu content={item.content} href={item.href} />
            ))}
          </div>
        </div>
        <div>
          <img src={Logo} alt="Logo" style={{ width: '153px', height: '53px' }} />
        </div>
        <div class={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3).map((item) => (
              <Menu content={item.content} href={item.href} />
            ))}
          </div>
          <div className={containerBoxIcon}>
            <img width={26} height={26} src={reloadIcon} alt="reloadIcon" />
            <img width={26} height={26} src={heartIcon} alt="heartIcon" />
            <img width={26} height={26} src={cartIcon} alt="cartIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
