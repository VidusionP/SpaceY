import React, { useState } from 'react'
import logo from '../../assests/SPACE-V.png'
import { HamburgerCollapse} from 'react-animated-burgers'
import { NavLink, Link } from 'react-router-dom'
import './Header.scss'


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='header'>
        <div className='header__top'>
            <div className='header__top--logo'>
                <img className='header__top--logo__img' src={logo}/>
            </div>
            <div className='header__top--menu'>
                <HamburgerCollapse className="my-styles btn" isActive={isOpen} toggleButton={() => setIsOpen(!isOpen)}/>
            </div>
        </div>
        {/* <nav className={isOpen?'header__nav active1234':'header__nav'} >
                    <ul className='header__nav--subs'>
                        <li className='header__nav--subs__list'>
                            <NavLink onClick={() => setIsOpen(false) } to='/'  className='header__nav--subs__list--link' >
                                    Home
                            </NavLink>
                        </li>
                        <li className='header__nav--subs__list'>
                            <NavLink onClick={() => setIsOpen(false) } to='/services' className='header__nav--subs__list--link'>Our Services</NavLink>
                        </li>
                        <li className='header__nav--subs__list'>
                            <NavLink onClick={() => setIsOpen(false) } to='/insights' className='header__nav--subs__list--link'>Insights</NavLink>
                        </li>
                        <li className='header__nav--subs__list'>
                            <NavLink onClick={() => setIsOpen(false) } to='/insight' className='header__nav--subs__list--link'>Insight</NavLink>
                        </li>
                        <li className='header__nav--subs__list'>
                            <NavLink onClick={() => setIsOpen(false) } to='/about' className='header__nav--subs__list--link'>About Us</NavLink>
                        </li>
                        <li className='header__nav--subs__list'>
                            <Link to='/contact' >
                                <button onClick={() => setIsOpen(false)} className='header__nav--contact'>CONTACT US</button>
                            </Link>
                        </li>
                    </ul>
        </nav> */}
    </header>
  )
}
