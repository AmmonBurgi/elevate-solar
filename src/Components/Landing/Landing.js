import React from 'react'

import panelInstal from '../../Solar Panel Installation.webp'
import solarIcon from '../../logo_transparent_background.webp'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHandshake} from '@fortawesome/free-solid-svg-icons'
import {faBoxOpen} from '@fortawesome/free-solid-svg-icons'
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'
import './landing.css'

function Landing(props){
    return(
        <div className='landing-component'>
            <section className='landing-top-section'>
                <div className='landing-nav-links'>
                    <img src={panelInstal} />
                    <div className='landing-align-nav-tags'>
                        <div className='landing-nav-tags'>
                            <div onClick={() => props.history.push('/talk')}>
                                <FontAwesomeIcon icon={faHandshake}></FontAwesomeIcon>
                                <p>Talk To Someone</p>
                            </div>
                        </div>
                        <div id='landing-nav-first-border' className='landing-nav-tags'>
                            <div onClick={() => props.history.push('/works')} id='even-tags'>
                                <FontAwesomeIcon icon={faBoxOpen}></FontAwesomeIcon>
                                <p >How It Works</p>
                            </div>
                        </div>
                        <div id='landing-nav-second-border' className='landing-nav-tags'>
                            <div onClick={() => props.history.push('/careers')}>
                                <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                                <p>About</p>
                            </div>
                        </div>
                        <div className='landing-nav-tags'>
                            <div onClick={() => props.history.push('/science')} id='even-tags'>
                                <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                                <p>Solar Science</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='landing-meet'>
                    <div className='landing-meet-video'>

                    </div>
                    <div className='landing-meet-button'>
                        <p>Let's Meet</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </section>
            <hr className='landing-tb-hr'></hr>
            <section className='landing-bottom-section'>
                <p>We understand the importance of renewable
                energy and make it simple for customers to make the switch with no debt and up-front costs.</p>
                <div className='landing-btm-savings'>
                    <nav>
                        <p className='landing-saving-title'>SOLAR EQUALS
                        SMART SAVINGS</p>
                        <p className='landing-saving-first'>Choosing solar puts you in control of your electric bill
                        and your home environment. Partnering with Elevate Solar
                        allows us to help you do that without a pennyout-of-pocket.</p>
                        <p className='landing-saving-last'>With Elevate Solar, you can save money on your electricity bill and lower your dependence on scarce, expensive fossil fuels.</p>
                    </nav>
                    <img src={solarIcon} alt='solar-icon' />
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