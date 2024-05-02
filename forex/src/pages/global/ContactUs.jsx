import '../../css/ContactUs.css';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2dzloah', 'template_qx0fxut', form.current, {
        publicKey: 'LeBrjy0cIOEyOxtqe',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='contact_container' ref={form} onSubmit={sendEmail}>
      <div className='contact'>
      <h2 className='text-color'>Contact us</h2><br />
      <label className='contact_label'>Name</label>
      <input className='contact_input' type="text" name="from_name" /><br />
      <label className='contact_label'>Email</label>
      <input className='contact_input' type="email" name="from_email" /><br />
      <label className='contact_label'>Message</label>
      <textarea className='contact_input'  name="message" /><br />
      <input className='contact_button' type="submit" value="Send" />
      </div>
    </form>
  );
};