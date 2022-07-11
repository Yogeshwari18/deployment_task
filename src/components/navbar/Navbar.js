import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Real</span>Estate</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Rent</a></li>
                    <li><a href='#'>Buy</a></li>
                    <li><a href='#'>Sell</a></li>
                    <li><a href='#'>Manage Property</a></li>
                    <li><a href='#'>Resources</a></li>
                </ul>
                <div className='box'>
                <button className='btn'>Login</button>
                <button className='btn'>Sign Up</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                  {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar