import React from 'react';
import style from './Project.module.css';

function Project(props) {
  return (
    <div className={style.project}>
      <div className={style.projectPhotoContainer} style={props.style}>
        <button className={style.projectButton} >View</button>
      </div>
    </div>
  );
}

export default Project;
