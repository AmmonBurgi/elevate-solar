import React from 'react'

import solarIcon from '../../logo_transparent_background.webp'
import './footer.css'

function Footer(){
    return (
        <footer className='footer-component'>
            <div className='footer-main'>
                <div className='footer-left'>
                    <nav className='footer-location'>
                        <p>Location</p>
                        <p>4000 us-90 suite C,<br></br>
                        Pace, Florida 32571</p>
                    </nav>
                    <nav className='footer-follow'>
                        <p>Follow</p>
                        <a href='https://www.facebook.com/elevatesolarenergy/'>Facebook</a>
                        <a href='https://www.instagram.com/elevate_solar_energy/?hl=en'>Instagram</a>
                    </nav>
                </div>
                <img src={solarIcon} alt='Elevate-Solar-Icon' />
                <div className='footer-right'>
                    <p>© 2023 by Trademark.<br></br>
                    Proudly created by I Kill Giants LLC</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer