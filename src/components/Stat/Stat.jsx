import React from 'react'
import './Stat.css'
import { FaUser, FaMapMarkerAlt, FaServer } from 'react-icons/fa'

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
                        <span>90+</span>
                        <span>User</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="icon">
                        <FaMapMarkerAlt/>
                    </div>
                    <div className="stat-detail">
                        <span>30+</span>
                        <span>Locations</span>
                    </div>
                </div>
                <div className="stat-card">
                    <div className="icon">
                        <FaServer/>
                    </div>
                    <div className="stat-detail">
                        <span>50+</span>
                        <span>Servers</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stat
