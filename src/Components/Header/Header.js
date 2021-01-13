import React from 'react'
import {Link, useHistory} from 'react-router-dom'

import './header.css'
import solarIcon from '../../elevate-solar icon.jpg'

function Header(props){

    const history = useHistory()

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
                <div className='header-nav-box'>
                    <Link to='/' className={history.location.pathname === '/' ? 'white-nav-text' : 'header-nav-text'}>Home</Link>
                    <div className={history.location.pathname === '/' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </div>
                <div className='header-nav-box'>
                    <Link to='/works' className={history.location.pathname === '/works' ? 'white-nav-text' : 'header-nav-text'}>How It Works</Link>
                    <div className={history.location.pathname === '/works' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </div>
                <div className='header-nav-box'>
                    <Link to='/talk' className={history.location.pathname === '/talk' ? 'white-nav-text' : 'header-nav-text'}>Talk To Someone</Link>
                    <div className={history.location.pathname === '/talk' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </div>
                <div className='header-nav-box'>
                    <Link to='/careers' className={history.location.pathname === '/careers' ? 'white-nav-text' : 'header-nav-text'}>Careers</Link>
                    <div className={history.location.pathname === '/careers' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </div>
                <div className='header-nav-box'>
                    <Link to='/science' className={history.location.pathname === '/science' ? 'white-nav-text' : 'header-nav-text'}>Solar Science</Link>
                    <div className={history.location.pathname === '/science' ? 'absolute-home-color' : 'absolute-front-color'}></div>
                </div>
                <p className='header-contact'>Contact US 850-905-0115</p>
            </section>
        </div>
    )
}

export default Header