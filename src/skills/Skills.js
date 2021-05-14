import React from 'react'
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from './skill/Skill';


function Skills () {
   return (
      <div className={style.skillsBlock} >
         <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h2 className={style.title}>MY SKILLS</h2>
            <div className={style.skills}>
            <Skill title={'React/Redux'} description={'Fusce suscipit, ante a hendrerit thelery ullamcorper, risus nisl cursus purus the viverra ante nulla vel justo.'} />
            <Skill title={'JS'} description={'Fusce suscipit, ante a hendrerit thelery ullamcorper, risus nisl cursus purus the viverra ante nulla vel justo.'}/>
            <Skill title ={'HTML&CSS'} description={'Fusce suscipit, ante a hendrerit thelery ullamcorper, risus nisl cursus purus the viverra ante nulla vel justo.'}/>
            </div>
         </div>
      </div>
   )
}


export default Skills