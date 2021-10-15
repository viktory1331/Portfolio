import React from 'react';
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Skill from './skill/Skill';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function Skills() {
  return (
    <div id="Skills" className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <span className={style.skillTitle}>Skills</span>
        <h2 className={style.title}>programming Skills</h2>
        <div className={style.skills}>
          <Skill
            icon={['fab', 'html5']}
            title={'HTML5'}
            description={
              'The correct use of block names with tags to create semantic layout. Using html to create any blocks on the site.'
            }
          />
          <Skill
            icon={['fab', 'css3']}
            title={'CSS3'}
            description={
              'The use of CSS to style the site, also cross-browser layout, semantic layout, Material UI. Using a variety of libraries and animations.'
            }
          />
          <Skill
            icon={['fab', 'js-square']}
            title={'JavaScript'}
            description={
              'Using JavaScript to write logic. Understanding the structure of the tree virtual DOM. knowledge of the principles of object-oriented programming.'
            }
          />
          <Skill
            icon={['fab', 'react']}
            title={'React'}
            description={
              'Using the React.js library to write applications. FLUX Cycle, HOC, REST API, react-redux, AJAX, axios. Understanding the component life cycle and asynchronous queries and operations.'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
