import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import blueLamp from './../assets/image/blueLamp.jpg';
import greenFlower from './../assets/image/greenFlower.jpg';
import greenSigarets from './../assets/image/greenSigarets.jpg';


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

  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <span className={style.portfolioTitle}>Portfolio</span>
        <h2 className={style.CreativeWorkstitle}>Creative Works</h2>
        <div className={style.projects}>
          <Project style={lamp} />
          <Project style={green} />
          <Project style={sigarets} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
