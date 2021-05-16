import React from 'react'
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Main () {
   return (
      <div className={style.mainBlock} >
         <div className={`${styleContainer.container} ${style.mainContainer}`}>
         <div className={style.greeting}>
            <h1>Fedosowa Victoria</h1>
            <h2>I'm front-end developer</h2>
         </div>
         <div className={style.photo}></div>
         </div>
      </div>
   )
}


export default Main