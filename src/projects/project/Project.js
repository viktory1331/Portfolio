import React, { useState } from 'react';
import style from './Project.module.scss';

function Project(props) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={style.project}>
      <div
        className={`${style.projectPhotoContainer} ${
          isHover ? style.isHover : ''
        }`}
        style={props.style}
      >
        <button
          className={style.projectButton}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default Project;
