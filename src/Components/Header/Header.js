import React from 'react'
import './header.css'
import solarIcon from '../../elevate-solar icon.jpg'

function Header(){
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
                <div>
                    <p>Home</p>
                </div>
                <div>
                    <p>How It Works</p>
                </div>
                <div>
                    <p>Talk To Someone</p>
                </div>
                <div>
                    <p>Careers</p>
                </div>
                <div>
                    <p>Solar Science</p>
                </div>
            </section>
        </div>
    )
}

export default Header