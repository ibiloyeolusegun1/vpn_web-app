import React from 'react'
import './Footer.css'
import footerImg from '../../img/footer-logo.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <section className="footer" id='footer'>
        <div className="f-container">
            <div className="f-about">
                <img src={footerImg} alt="" />
                <p><span>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                <div className="icons">
                    <div className="icon">
                        <FaFacebookF/>
                    </div>
                    <div className="icon">
                        <FaTwitter/>
                    </div>
                    <div className="icon">
                        <FaInstagram/>
                    </div>
                </div>
                <p>&copy;2023 LaslesVPN</p>
            </div>
            <div className="f-box">
                <h3>Product</h3>
                <li><a href="/">Download</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">Locations</a></li>
                <li><a href="/">Server</a></li>
                <li><a href="/">Countries</a></li>
                <li><a href="/">Blog</a></li>
            </div>
            <div className="f-box">
                <h3>Engage</h3>
                <li><a href="/">LaslesVPN?</a></li>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Tutorials</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms of Service</a></li>
            </div>
            <div className="f-box">
                <h3>Earn Money</h3>
                <li><a href="/">Affiliate</a></li>
                <li><a href="/">Become Partner</a></li>
            </div>
        </div>
    </section>
  )
}

export default Footer
