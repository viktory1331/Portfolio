import React from 'react';
import style from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import sunnyImg from '../assets/image/sunnyImg.jpg';
import background from '../assets/image/background.jpg';
import ParticleBackground from '../ParticleBackground';

function Main(props) {
  const backgroundImg = {
    backgroundImage: `url(${background})`,
  };

  const myPhoto = {
    backgroundImage: `url(${sunnyImg})`,
  };

  return (
    <div className={style.mainBlock} style={backgroundImg}>
      <div className={style.mainParticles}>
        <ParticleBackground />
      </div>
      <div className={`${styleContainer.container} ${style.mainContainer}`}>
        <div className={style.photo} style={myPhoto}></div>
        <div className={style.greeting}>
          <h1 className={style.myName}>Fedosowa Victoria</h1>
          <h2 className={style.mySpecialization}>I'm front-end developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
