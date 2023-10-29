import React from 'react'
import './Map.css'
import mapImg from '../../img/map.png'
import client1 from '../../img/parthner1-vpn.png'
import client2 from '../../img/parthner2-vpn.png'
import client3 from '../../img/parthner3-vpn.png'
import client4 from '../../img/parthner4-vpn.png'
import client5 from '../../img/parthner5-vpn.png'

const Map = () => {
  return (
    <section className='map'>
        <div className="map-container">
            <div className="image">
                <img src={mapImg} alt="" />
            </div>
            <div className="client-logo">
                <img src={client1} alt="" />
                <img src={client2} alt="" />
                <img src={client3} alt="" />
                <img src={client4} alt="" />
                <img src={client5} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Map
