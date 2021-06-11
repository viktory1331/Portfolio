import React from 'react';
import style from './NavLink.module.scss';
import { Link, animateScroll as scroll } from 'react-scroll';

function NavLink() {
  return (
    <div className={style.navLink}>
      <Link
        activeClass={style.active}
        to="Main"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Main
      </Link>
      <Link
        activeClass={style.active}
        to="Skills"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Skills
      </Link>
      <Link
        activeClass={style.active}
        to="Projects"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Projects
      </Link>
      <Link
        activeClass={style.active}
        to="Contacts"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Contacts
      </Link>
    </div>
  );
}

export default NavLink;
