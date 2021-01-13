import React from 'react'

import panelInstal from '../../Solar Panel Installation.webp'
import './landing.css'

function Landing(){
    return(
        <div className='landing-component'>
            <section className='landing-top-section'>
                <div className='landing-nav-links'>
                    <img src={panelInstal} />
                    <nav className='landing-align-nav-tags'>
                        <div className='landing-nav-tags'>
                            
                        </div>
                        <div id='landing-nav-first-border' className='landing-nav-tags'>

                        </div>
                        <div id='landing-nav-second-border' className='landing-nav-tags'>

                        </div>
                        <div className='landing-nav-tags'>

                        </div>
                    </nav>
                </div>
                <div className='landing-meet'>

                </div>
            </section>
            <hr></hr>
            <section className='landing-bottom-section'>
                <p></p>
                <div>
                    <nav>
                        <p></p>
                        <p></p>
                    </nav>
                    <img />
                </div>
                <div>
                    <p></p>
                    <nav>
                        <p></p>
                        <img />
                    </nav>
                </div>
                <div>
                    <p></p>
                    <img />
                    <p></p>
                    <p></p>
                </div>
            </section>
        </div>
    )
}

export default Landing