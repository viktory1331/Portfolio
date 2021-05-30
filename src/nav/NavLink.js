import React from 'react'
import style from './NavLink.module.scss'

function NavLink () {
   return (
      <div className={style.navLink}>
         <a href="">Main</a> 
         <a href="">Skills</a> 
         <a href="">Projects</a> 
         <a href="">Contacts</a> 
      </div>
   )
}

export default NavLink