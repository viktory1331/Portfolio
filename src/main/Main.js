import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import me from '../assets/images/me.jpg';

function Main() {
  return (
    <div className={style.mainBlock} id="Main">
      <div className={`${styleContainer.container} ${style.mainContainer}`}>
        <div className={style.mainGreeting}>
          <h5>Fedosowa Victoriya</h5>
          <h1>Front-end Developer based in Kyiv</h1>
        </div>
        <div className={style.mainPhoto}>
          <img src={me} alt="it's me" />
        </div>
      </div>
    </div>
  );
}

export default Main;
