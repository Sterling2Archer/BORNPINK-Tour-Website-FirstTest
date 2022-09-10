import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
      
        <div className='navbar-container'>
            <Link 
              to='/Home' className='menu-icon' onClick={handleClick}> 
                <center> MAIN MENU <i class='fab fa-typo3' /></center>
                <center><img src="./images2/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2pvLzAvdWQvNDg5LzI0NDg0MTMvYmxhY2twaW5rYm9ybnBpbmt3b3JsZHRvdS5qcGc=-4.jpg" alt="BLACKPINK"/></center>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
               <video src='./videos/tourmessage.mp4' autoPlay loop muted />
            </Link>

            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <center>THE BORN PINK TOUR <i class='fab fa-typo3' /></center>
                <img src="./images2/unknown2.png" alt="BLACKPINK"/>
               <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </Link>
          
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Members-Of-BLACKPINK' className='nav-links' onClick={closeMobileMenu}>
              Members Of BLACKPINK
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Music' className='nav-links' onClick={closeMobileMenu}>
              Music
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Sign-Up-For-Email-Updates' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up For Email Updates
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline'>Sign Up For Email Updates</Button>}
      </div>
    </nav>
  </>
);
}
export default Navbar;
