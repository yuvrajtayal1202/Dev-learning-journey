import React from 'react'

export default function Header() {
    return (
      
      <div className = "header-div">
        <img
          alt="React logo"
          className="nav-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAmafdPNr9fd0KC0Z98WYEC7Wl1wYlPVf-A&s"
        />
  
        <nav>
          <ul className="nav-list">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    );
  }
  