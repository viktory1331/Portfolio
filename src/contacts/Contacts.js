import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css';

function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h2 className={style.title}>Get in touch</h2>
        <form className={style.form} method={'post'}>
          <div className={style.inputContainer}>
            <input
              className={style.inputElement1}
              type={'text'}
              name={'fname'}
              placeholder={'Name'}
            />
            <input
              className={style.inputElement2}
              type={'text'}
              name={'fname'}
              placeholder={'Email'}
            />
          </div>
          <textarea className={style.textarea} placeholder={'Message'} />
        </form>
        <button className={style.contactsButton}>Say Hello!</button>
      </div>
    </div>
  );
}

export default Contacts;
