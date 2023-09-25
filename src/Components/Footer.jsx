import React from 'react'
import "./Footer.css"
import facebook from "../img/facebook.jpg"
import instagram from "../img/instagram.jpg"
import twitter from "../img/twitter.jpg"
import youtube from "../img/youtube.jpg"



function Footer() {
  return (
    <div id='footer-box'>
        <center><h1 className='theSiren'>The Siren</h1></center>
        <div className='footer-box'>

            <div className='social-media-box'>
           <div><h2>FOLLOW US</h2></div>

            <div id='social-media-logo'>
            <img src={facebook} alt="Facebook"  className='social-media-logo'/>
            <img src={instagram} alt="Instagram"  className='social-media-logo'/>
            <img src={twitter} alt="Twitter"  className='social-media-logo'/>
            <img src={youtube} alt="You-tube"  className='social-media-logo'/>
            </div>
            </div>
            <br />

            <div className='contact'>
                <h4>CONTACT-US</h4>
                <h5>Contact-No. : +91 XXXXX-XXXXX</h5>
                <h5>Email:  dassayatya@gmail.com</h5>
            </div>

            
            
        </div>
    </div>
  )
}

export default Footer
