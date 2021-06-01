import React from 'react';
import style from './Skill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skill(props) {
  return (
    <div className={style.skill}>
      <div className={style.icon}>
        <FontAwesomeIcon icon={props.icon} size="4x" />
      </div>
      <h3 className={style.title}>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  );
}

export default Skill;
