import React from 'react';

import Button from '../button/button.component';

import './contact-form.styles.scss';

const ContactForm = () => {
  return (
  <div className='contact-form'>
    <div className='form-header'>
      <h4>SEND US MESSAGE!</h4>
      <p>Let's discuss and decide what kind of solutions that we can give in order to maximize your organization performance.</p>
    </div>
    <form className='form-input'>
      <input type='text' placeholder='Your Name' name='name' />
      <input type='email' placeholder='Your Email' name='email' />
      <input type='text' placeholder='Subject' name='subject' />
      <textarea rows='6' placeholder='Message'></textarea>
      <Button form='form' color='btn-dark-blue'>Send Message</Button>
    </form>
  </div>
)};

export default ContactForm;
