import React from 'react'
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Contacts () {
   return (
      <div className={style.contactsBlock} >
         <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Contacts</h2>       
            <form className={style.form} method={'post'}>
               <input className={style.inputElement} type={'text'} name={'fname'} placeholder={'Name'} class={'form-control'}  required={''} />
               <input className={style.inputElement} type={'text'} name={'fname'} placeholder={'Email'}  />
               <textarea className={style.textarea} placeholder={'Message'} />
            </form>
            <button className={style.contactsButton}>Send</button>
         </div>
      </div>
   )
}


export default Contacts