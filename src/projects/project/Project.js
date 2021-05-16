import React from 'react'
import style from './Project.module.css'

function Project (props) {
   return (
      <div className={style.project}>
         <div className={style.photo}>
            <button className={style.projectButton}>View</button>
         </div>
         <div className={style.descriptionContainer}>
         <h3>{props.title}</h3>
         <span className={style.spanText}>{props.description}</span>
         </div>
      </div>
   )
}

export default Project