import React from 'react'
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'

function Contacts () {
   return (
      <div className={style.contactsBlock} >
         <div className={`${styleContainer.container} ${style.contactsContainer}`}>
            <h2 className={style.title}>Contacts</h2>
         <div className={style.formContainer}>
            <form className={style.form} method={'post'}>
               <input type={'text'} name={'fname'} placeholder={'Name'} class={'form-control'}  required={''} />
               <input type={'text'} name={'fname'} placeholder={'Email'}  />
               <textarea className={style.textarea} placeholder={'Message'} />
            </form>
         </div>
            <button className={style.contactsButton}>Send</button>
         </div>
      </div>
   )
}


export default Contacts