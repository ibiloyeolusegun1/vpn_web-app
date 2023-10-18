import React, { useState } from 'react'
import './Header.css'
import Logo from '../../img/logo-vpn.png'
import { FaBars, FaTimesCircle } from 'react-icons/fa'

const Header = () => {

    const [active, setActive] = useState('menu')

    const showNavBar = () => {
        setActive('menu activeNavbar')
    }

    const removeNavBar = () => {
        setActive('menu')
    }

   
  return (
    <div>
        <div className="header flex">

            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <div className={active}>
                <ul className="menuList">
                    <li className="menuItems">
                        <a href="#" onClick={removeNavBar} className="menuLink">About</a>
                    </li>
                    <li className="menuItems">
                        <a href="#" onClick={removeNavBar} className="menuLink">Features</a>
                    </li>
                    <li className="menuItems">
                        <a href="#" onClick={removeNavBar} className="menuLink">Pricing</a>
                    </li>
                    <li className="menuItems">
                        <a href="#" onClick={removeNavBar} className="menuLink">Testimonials</a>
                    </li>
                    <li className="menuItems">
                        <a href="#" onClick={removeNavBar} className="menuLink">Help</a>
                    </li>
                    <li className="menuItems">
                        <a href="#" onClick={removeNavBar} className="menuLink">Contact</a>
                    </li>
                </ul>
                <div onClick={removeNavBar} className="closeNavbar">
                    <FaTimesCircle className='icon'/>
                </div>
            </div>

            <div className="button flex">
                <button className="btn btn-white">Sign In</button>
                <button className="btn btn-red">Sign Up</button>
            </div>

            <div onClick={showNavBar} className="toogleNavbar">
                <FaBars className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Header
