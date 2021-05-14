import React from 'react'
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Footer () {
   return (
      <div className={style.footerBlock} >
         <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2 className={style.title}>Fedosowa Victoria</h2>
            <div className={style.icons}>
               <div className={style.icon}></div>
               <div className={style.icon}></div>
               <div className={style.icon}></div>
               <div className={style.icon}></div>
            </div>
            <p>© 2021. All rights reserved</p>
         </div>
      </div>
   )
}


export default Footer