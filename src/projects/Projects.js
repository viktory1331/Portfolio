import React from 'react';
import style from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Project from './project/Project';
import social from './../assets/images/social.png';
import todo from './../assets/images/todo.jpg';
import gym from './../assets/images/gym.jpg';
import login from './../assets/images/login.jpg';
import future from './../assets/images/future.jpg';
import futureSecond from './../assets/images/futureSecond.jpg';

function Projects() {
  const socialNetwork = {
    backgroundImage: `url(${social})`,
  };
  const todoLists = {
    backgroundImage: `url(${todo})`,
  };
  const gymPicture = {
    backgroundImage: `url(${gym})`,
  };
  const logIn = {
    backgroundImage: `url(${login})`,
  };
  const futureProject = {
    backgroundImage: `url(${future})`
  };
  const futureSecondProject = {
    backgroundImage: `url(${futureSecond})`
  }
 
  return (
    <div className={style.projectsBlock} id="Projects">
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <span className={style.portfolioTitle}>Portfolio</span>
        <h2 className={style.CreativeWorkstitle}>Creative Works</h2>
        <div className={style.projects}>
          <Project
            title={'ToDo List'}
            description={'TS, Redux, RestAPI, Thunk,Material UI, Unit Tests'}
            style={todoLists}
            linkName={' https://github.com/viktory1331/Trello-analog'}
          />
          <Project
            title={'The Social Network'}
            description={'TS, Redux, RestAPI, Thunk, Unit Tests'}
            style={socialNetwork}
            linkName={'https://github.com/viktory1331/SocialNetworks'}
          />
          <Project
            title={'Gym Prototype'}
            description={'AXURE'}
            style={gymPicture}
            linkName={'https://github.com/viktory1331/Atletic-City-prototype-'}
          />
          <Project
            title={'SignUp Form'}
            description={'TS, React, React Hook Form'}
            style={logIn}
            linkName={'https://github.com/viktory1331/SignUp-Form'}
          />
          <Project
            title={'Future Project'}
            description={'...in progress'}
            style={futureProject}
            linkName={'https://github.com/viktory1331/link%20#2'}
          />
          <Project
            title={'Futer Project'}
            description={'...in progress'}
            style={futureSecondProject}
            linkName={'https://github.com/viktory1331/link%20#2'}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
