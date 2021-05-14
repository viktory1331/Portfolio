import React from 'react'
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Project from './project/Project';



function Projects () {
   return (
      <div className={style.projectsBlock} >
         <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            <h2 className={style.title}>My Works</h2>
            <div className={style.projects}>
               <Project title={'Some text'} description={'Fusce suscipit, ante a hendrerit thelery ullamcorper, risus nisl cursus purus the viverra ante nulla vel justo.'} />
               <Project title={'Some text'} description={'Fusce suscipit, ante a hendrerit thelery ullamcorper, risus nisl cursus purus the viverra ante nulla vel justo.'} />
            </div>
         </div>
      </div>
   )
}


export default Projects