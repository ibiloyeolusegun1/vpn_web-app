import React from 'react'
import './Features.css'
import featureIMG from '../../img/about-vpn.png'
import { FaCheckCircle } from 'react-icons/fa'

const Features = () => {
  return (
    <section className='features' id='features'>
        <div className="feature-container">
            <div className="feature-content">
                <div className="image">
                    <img src={featureIMG} alt="" />
                </div>
                <div className="details">
                    <h3>We provide many features you can use</h3>
                    <p>You can explore the feature that we have with have with fun and they have their own function each feaature.</p>
                    <li><FaCheckCircle className='icon'/><span>Powerful online protection</span> </li>
                    <li><FaCheckCircle className='icon'/><span>Internet without borders</span></li>
                    <li><FaCheckCircle className='icon'/><span>Supercharged VPN</span></li>
                    <li><FaCheckCircle className='icon'/><span>NO specific time limits</span></li>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features
