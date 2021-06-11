import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import socialNetwork from './../assets/image/socialNetwork.jpg';
import todo from './../assets/image/todo.jpg';
import gym from './../assets/image/gym.png';

function Projects() {
  const social = {
    backgroundImage: `url(${socialNetwork})`,
  };
  const todoLists = {
    backgroundImage: `url(${todo})`,
  };
  const gymPicture = {
    backgroundImage: `url(${gym})`,
  };

  return (
    <div className={style.projectsBlock} id="Projects">
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <span className={style.portfolioTitle}>Portfolio</span>
        <h2 className={style.CreativeWorkstitle}>Creative Works</h2>
        <div className={style.projects}>
          <Project
            style={social}
            linkName={'https://github.com/viktory1331/SocialNetworks'}
          />
          <Project
            style={todoLists}
            linkName={'https://github.com/viktory1331/Trello-analog'}
          />
          <Project
            style={gymPicture}
            linkName={'https://github.com/viktory1331/Atletic-City-prototype-'}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
