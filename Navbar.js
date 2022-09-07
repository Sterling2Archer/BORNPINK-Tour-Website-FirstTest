import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                BORN PINK <i className='fab fa-typo3' />
                <img src="./images2/unknown4.png" alt="BLACKPINK"/>
            </Link>
            
        </div>
      </nav>

    </>
  )
}


export default Navbar


