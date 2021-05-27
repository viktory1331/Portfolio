import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import blueLamp from './../assets/image/blueLamp.jpg';
import greenFlower from './../assets/image/greenFlower.jpg';
import greenSigarets from './../assets/image/greenSigarets.jpg';
import minerals from './../assets/image/minerals.jpg';
import purple from './../assets/image/purple.jpg';
import simpleFlower from './../assets/image/simpleFlower.jpg';

function Projects() {
  const lamp = {
    backgroundImage: `url(${blueLamp})`,
  };
  const green = {
    backgroundImage: `url(${greenFlower})`,
  };
  const sigarets = {
    backgroundImage: `url(${greenSigarets})`,
  };
  const mineral = {
    backgroundImage: `url(${minerals})`,
  };
  const purplePicture = {
    backgroundImage: `url(${purple})`,
  };
  const flower = {
    backgroundImage: `url(${simpleFlower})`,
  };

  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <span className={style.portfolioTitle}>Portfolio</span>
        <h2 className={style.CreativeWorkstitle}>Creative Works</h2>
        <div className={style.projects}>
          <Project style={lamp} />
          <Project style={green} />
          <Project style={sigarets} />
          <Project style={mineral} />
          <Project style={purplePicture} />
          <Project style={flower} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
