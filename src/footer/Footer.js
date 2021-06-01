import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

function Footer() {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h2 className={style.title}>Fedosowa Victoria</h2>
        <div className={style.icons}>
          <a
            className={style.icon}
            href="https://vk.com/viktoria_fedosova"
            target="_blank"
          >
            <FontAwesomeIcon icon={['fab', 'vk']} size="2x" />
          </a>
          <a
            className={style.icon}
            href="https://t.me/smyatanok"
            target="_blank"
          >
            <FontAwesomeIcon icon={['fab', 'telegram-plane']} size="2x" />
          </a>
          <a
            className={style.icon}
            href="https://www.linkedin.com/in/%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D1%84%D0%B5%D0%B4%D0%BE%D1%81%D0%BE%D0%B2%D0%B0-b16aa9201/"
            target="_blank"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
          </a>
          <a
            className={style.icon}
            href="https://github.com/viktory1331"
            target="_blank"
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
        </div>
        <p className={style.reserved}>© 2021. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
