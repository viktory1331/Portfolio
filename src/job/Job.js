import React from 'react';
import style from './Job.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import MyCV from '../CV/CV.pdf'

function Job() {
  return (
    <div className={style.jobBlock}>
      <div className={`${styleContainer.container} ${style.jobContainer}`}>
        <h2 className={style.title}>I am considering remote work options</h2>
        <div className={style.buttonsContainer}>
          <button className={style.jobButton}>
            <a href="https://t.me/myatasmyatana" target="_blank" rel="noreferrer">
              Hire me
            </a>
          </button>
          <button className={style.jobButton}><a href={MyCV} download="My_File.pdf">Download CV</a></button>
        </div>
      </div>
    </div>
  );
}

export default Job;
