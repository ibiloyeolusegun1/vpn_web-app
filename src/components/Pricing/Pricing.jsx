import React from 'react'
import './Pricing.css'
import pricingIMG from '../../img/pricing.png'

const Pricing = () => {
  return (
    <section className='pricing' id='pricing'>
        <div className="pricing-container">
            <h1>Choose Your Plan</h1>
            <p>Let's choose the package that is best for you and explore it happily and carefully.</p>
            <div className="pricing-cards">
                <div className="card">
                    <div className="image">
                        <img src={pricingIMG} alt="" />
                    </div>
                    <h3>Free Plan</h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={pricingIMG} alt="" />
                    </div>
                    <h3>Standard Plan</h3>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={pricingIMG} alt="" />
                    </div>
                    <h3>Premium Plan</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing
