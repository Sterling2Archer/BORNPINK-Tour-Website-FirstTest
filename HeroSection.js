import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
   <div className='hero-container'>
   <Link>
    <center><img src="./images2/kisspink.jpg" alt="BLACKPINK"/></center> </Link>
      <h1>BORN PINK TOUR: SEOUL</h1>
      <p>A MESSAGE FROM BLACKPINK</p>
      <div className='hero-btns'>
        <Button 
          className='btns' 
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED 
        </Button>
        <Button
          className='btns' 
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          GET STARTED <i className='far fa-play-circle' />
        </Button> 
      </div>
    </div>
  )
}

export default HeroSection;
