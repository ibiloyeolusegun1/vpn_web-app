import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from 'swiper'
import './Customer.css'
import { Data } from './Data'
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { sliderSetting } from './SlideSetting'

const Customer = () => {
  return (
    <section className='customer' id='customer'>
        <div className="customer-container">
            <div className="title">
                <div>
                <h1>Trusted by Thousands of Happy Customer</h1>
                <p>There are the story of our happy customer who have joined us with great pleasure when using this crazy features.</p>
                </div>
            </div>
        
            <Swiper {...sliderSetting} className="container-content">
                <SliderButtons/>
                {
                    Data.map(({id, image, title, description}) => {
                        return(
                            <SwiperSlide key={id}>
                                <div className="customer-card">
                                    <div className='details'>
                                        <div className='info'>
                                            <img src={image} alt="" className='image'/>
                                            <div className="name">
                                                <h3>{title}</h3>
                                                <span>Lagos, Nigeria</span>
                                            </div>
                                        </div>
                                        <div className='rating'>
                                            <span>4.5</span>
                                            <FaStar className='icon'/>
                                        </div>
                                    </div>
                                    <p>{description}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    </section>
  )
}

export default Customer

const SliderButtons = () => {
    const swiper = useSwiper();
    return(
        <div className="customer-button">
            <button onClick={() => swiper.slidePrev()}><FaArrowLeft/></button>
            <button onClick={() => swiper.slideNext()}><FaArrowRight/></button>
        </div>
    )
}
