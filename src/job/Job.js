import React from 'react';
import style from './Job.module.scss';
import styleContainer from '../common/styles/Container.module.css';

function Job() {
  return (
    <div className={style.jobBlock}>
      <div className={`${styleContainer.container} ${style.jobContainer}`}>
        <h2 className={style.title}>I am considering remote work options</h2>
        <div className={style.buttonsContainer}>
          <button className={style.jobButton}>Hire me</button>
          <button className={style.jobButton}>Download CV</button>
        </div>
      </div>
    </div>
  );
}

export default Job;
