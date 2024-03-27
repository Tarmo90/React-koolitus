import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';

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
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label>
      <input type="text" name="from_name" /> */}
      <br />
      <TextField label="name" variant="outlined" name='from_name' /> <br /><br />
      <TextField label="email" variant="outlined" name='from_email' /> <br /><br />
      <TextField label="message" variant="outlined" name='from_message' /> <br /><br />
      <Button variant='outlined' type="submit" >Send</Button>
    </form>
  );
};

