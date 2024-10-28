import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
      <div className='about-image'>

        <img src={aboutimage} alt=''/>
      </div>

      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>We are dedicated to helping you achieve your fitness goals. Our state-of-the-art facilities and experienced trainers will provide you with the support and motivation you need to succeed. Whether you're just starting out or you're a seasoned athlete, www.muscletime.co.in Gym has everything you need to get in shape and stay healthy. Come visit us today and see what sets us apart from the rest!</p>
       <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About;
