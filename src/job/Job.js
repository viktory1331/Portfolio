import React from 'react'
import style from './Job.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Job () {
   return (
      <div className={style.jobBlock} >
         <div className={`${styleContainer.container} ${style.jobContainer}`}>
         <h2 className={style.title}>I am considering remote work options</h2>
         <button className={style.jobButton}>Hire me</button>
         </div>
      </div>
   )
}


export default Job