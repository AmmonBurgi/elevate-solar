import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import './header.css'
import solarIcon from '../../logo_transparent_background.webp'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Header(props){
    const [toggleMenu, setToggleMenu] = useState(false)

    const history = useHistory();

    return (
        <div className='header-component'>
            <section className='header-left-section'>
                <img src={solarIcon} alt='elevate-solar-icon' />
                <div className='header-icon-text'>
                    <p className='header-icon-title'>Elevate Solar Energy</p>
                    <p className='header-title-second'>Solar | CONSULTING FIRM</p>
                    <hr></hr>
                    <p className='header-title-third'>OUR PLANET, OUR FUTURE!</p>
                </div>
            </section>
            <section className='header-right-section'>
                <Link to='/' className='header-nav-box'>
                    <p className={history.location.pathname === '/' ? 'white-nav-text' : 'header-nav-text'}>Home</p>
                    <div className={history.location.pathname === '/' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </Link>
                <Link to='/works' className='header-nav-box'>
                    <p className={history.location.pathname === '/works' ? 'white-nav-text' : 'header-nav-text'}>How It Works</p>
                    <div className={history.location.pathname === '/works' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </Link>
                <Link to='/talk' className='header-nav-box'>
                    <p className={history.location.pathname === '/talk' ? 'white-nav-text' : 'header-nav-text'}>Talk To Someone</p>
                    <div className={history.location.pathname === '/talk' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </Link>
                <Link to='/careers' className='header-nav-box'>
                    <p className={history.location.pathname === '/careers' ? 'white-nav-text' : 'header-nav-text'}>Careers</p>
                    <div className={history.location.pathname === '/careers' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </Link>
                <Link to='/science' className='header-nav-box'>
                    <p className={history.location.pathname === '/science' ? 'white-nav-text' : 'header-nav-text'}>Solar Science</p>
                    <div className={history.location.pathname === '/science' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </Link>
                <p className='header-contact'>Contact US (850-905-0115)</p>
            </section>
            <section className='header-drop-menu'>
                <div className={toggleMenu === false ? 'header-icon-wrapper' : 'fixed-icon-wrapper'}>
                    <FontAwesomeIcon id='exit-icon' onClick={() => setToggleMenu(!toggleMenu)} className={toggleMenu === false ? 'no-drop-menu-icon' : 'drop-menu-icon'} icon={faTimes}></FontAwesomeIcon>
                    <FontAwesomeIcon onClick={() => setToggleMenu(!toggleMenu)} className={toggleMenu === false ? 'drop-menu-icon' : 'no-drop-menu-icon'} icon={faBars}></FontAwesomeIcon>
                </div>
                <div className={toggleMenu === false ? 'no-drop-menu' : 'drop-menu'}>
                    <p className={toggleMenu === false ? 'no-contact-drop-down' : 'contact-drop-down'}>Contact US (850-905-0115)</p>
                    <div className={toggleMenu === false ? 'no-drop-links' : 'drop-links'}>
                        <Link 
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={history.location.pathname === '/' ? 'drop-current-nav' : 'drop-nav-text'} to='/'>Home</Link>
                        <Link 
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={history.location.pathname === '/works' ? 'drop-current-nav' : 'drop-nav-text'} to='/works'>How It Works</Link>
                        <Link 
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={history.location.pathname === '/talk' ? 'drop-current-nav' : 'drop-nav-text'} to='/talk'>Talk To Someone</Link>
                        <Link 
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={history.location.pathname === '/careers' ? 'drop-current-nav' : 'drop-nav-text'} to='/careers'>Careers</Link>
                        <Link 
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className={history.location.pathname === '/science' ? 'drop-current-nav' : 'drop-nav-text'} to='/science'>Solar Science</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header