import React from 'react';
import style from './Project.module.scss';

function Project(props) {
  return (
    <div className={style.project}>
      <div className={style.projectPhotoContainer} style={props.style} />
      <div className={style.info}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>
          <a href={props.linkName} target="_blank" rel="noreferrer">
            VIEW PROJECT
          </a>
        </button>
      </div>
    </div>
  );
}

export default Project;
