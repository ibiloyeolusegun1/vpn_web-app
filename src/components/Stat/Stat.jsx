import React from 'react'
import './Stat.css'
import { FaUser, FaMapMarkerAlt, FaServer } from 'react-icons/fa'
import CountUp from 'react-countup'

const Stat = () => {
  return (
    <section className='stat'>
        <div className="stat-container">
            <div className="cards">
                <div className="stat-card">
                    <div className="icon">
                        <FaUser/>
                    </div>
                    <div className="stat-detail">
                        <span>
                            <CountUp start={560} end={1600} duration={4}/>
                            <span>+</span>
                        </span>
                        <span>User</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="icon">
                        <FaMapMarkerAlt/>
                    </div>
                    <div className="stat-detail">
                        <span>
                            <CountUp start={20} end={160} duration={4}/>
                            <span>+</span>
                        </span>
                        <span>Locations</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="icon">
                        <FaServer/>
                    </div>
                    <div className="stat-detail">
                        <span>
                            <CountUp start={10} end={60} duration={4}/>
                            <span>+</span>
                        </span>
                        <span>Servers</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stat
