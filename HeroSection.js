import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     <video autoPlay loop muted src="./videos/tourmessage.mp4"/>
      <h1>BLACKPINK BORN PINK TOUR</h1>
      <p>TOUR 2023</p>
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
          CLICK HERE <i className='far
          fa-play-circle' />
        </Button>
      </div>
    </div>
  )
}
export default HeroSection;
