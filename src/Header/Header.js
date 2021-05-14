import React from 'react'
import NavLink from '../nav/NavLink';
import style from './Header.module.css';

function Header () {
   return (
      <div className={style.header} >
         <NavLink/>
      </div>
   )
}


export default Header