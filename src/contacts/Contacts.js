import React from 'react';
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import emailjs from 'emailjs-com';

function Contacts() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cwdqb2m',
        'answer_template',
        e.target,
        'user_9glEuALgG7QkKdhQVXRxp'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className={style.contactsBlock} id="Contacts">
      <div className={`${styleContainer.container} ${style.contactsContainer}`}>
        <h2 className={style.title}>Get in touch</h2>
        <form className={style.form} method={'post'} onSubmit={sendEmail}>
          <div className={style.inputContainer}>
            <input
              className={style.inputElement1}
              type={'text'}
              name={'name'}
              placeholder={'Name'}
            />
            <input
              className={style.inputElement2}
              type={'text'}
              name={'email'}
              placeholder={'Email'}
            />
          </div>
          <textarea
            className={style.textarea}
            placeholder={'Message'}
            name={'message'}
          />

          <button className={style.contactsButton} type={'submit'}>
            Say Hello!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
