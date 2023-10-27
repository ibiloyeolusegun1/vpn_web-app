import React from 'react'
import './Hero.css'
import heroIMG from '../../img/hero-vpn.png'


const Hero = () => {
  return (
    <section className='hero' id='home'>
        <div className="container">
            <div className="left">
                <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
                <p>Provide a netwotk for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting feature from us.</p>
                <button className="btn">Get Started</button>
            </div>
            <div className="right">
                <div className="image">
                    <img src={heroIMG} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
