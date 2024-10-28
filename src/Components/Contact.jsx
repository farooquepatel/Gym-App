import React from 'react';
import conactimage from '../images/contact image.jpg';

function Contact() {
  return (
    <div id='contact'>
      <div className='contact-container'>
        <div className='contact-image'>
          <img src={conactimage} alt='Contact' />
        </div>
        <div className='contact-form'>
          <h1>CONTACT US</h1>
          <p><strong>+91 8904292144</strong></p>
          <form
            action="https://formspree.io/f/xanynqoa" // Replace with your Formspree form ID
            method="POST"
          >
            <input type='text' name="name" placeholder='Full Name' required />
            <input type='email' name="email" placeholder='Email' required />
            <textarea placeholder='Write Here.....' name='message'></textarea>
            <input type='submit' value='Send' />
          </form>
          <h6>created by: farooque patel</h6>
        </div>
      </div>
    </div>
  );
}

export default Contact;
