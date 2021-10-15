import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.css';

function Footer() {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <p className={style.reserved}>© 2021. All rights reserved</p>
        <div>
          <a
            className={style.link}
            href="https://www.linkedin.com/in/%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D1%84%D0%B5%D0%B4%D0%BE%D1%81%D0%BE%D0%B2%D0%B0-b16aa9201/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
