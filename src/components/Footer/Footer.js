import React from 'react'
import './Footer.css'
import Logo from "../../assets/images/logo.png"

function Footer() {
  return (
    <div>
       <div className="bottomPage">
        <div className="bottomPageAboutUs">
          <h3>About Us</h3>
          <p>
            At Happy Pets, we provide all-inclusive services for your furry
            friends, from grooming and training to medical care and quality
            products. Our mission is to ensure your pets live healthy, happy,
            and well-cared-for lives.
          </p>
          <img src={Logo} alt="logo" />
        </div>

        <div className="bottomPageOurServices">
          <h3>Our Services</h3>
          <p>Pet Training</p>
          <p>Pet Shelter</p>
          <p>Pet Health</p>
          <p>Pet Essentials</p>
          <p>Pet Grooming</p>
        </div>

        <div className="bottomPageButton">
          <button>Join Us</button>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Footer
