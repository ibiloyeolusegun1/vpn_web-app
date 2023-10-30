import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <section className='newsletter' id='newsletter'> 
        <div className="newsletter-container">
            <div className="newletter-content">
                <div className="left">
                    <h1>Subscribe Now For Get Special Features!</h1>
                    <p>Let's subscribe with us and find the fun.</p>
                </div>
                <div className="right">
                    <button className="btn">Subscribe Now</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter
