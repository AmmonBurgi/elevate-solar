import React from 'react'

import panelInstall from '../../Solar Panel Installation.webp'
import solarIcon from '../../logo_transparent_background.webp'
import manSolar from '../../Man shows his family the solar panels on.webp'
import map from '../../map.webp'
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
                    <img alt='Panel-Installing' src={panelInstall} />
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
            <div id='hr-border'></div>
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
                <div className='landing-btm-why'>
                    <p className='landing-why-title'>WHY ELEVATE SOLAR ENERGY?</p>
                    <nav className='landing-btm-why-text'>
                        <nav>
                            <p className='why-text-first'>You’ve probably heard that solar panels can save your money. And that’s true. You’ve probably also heard that they’re too expensive for most people to afford. <b>We’re happy to inform you, that is not true.</b></p>
                            <p className='why-text-last'>
                            Elevate Solar is in search of VIP customers who serve as neighborhood 
                            advertising homes for our energy and cost saving solar technology.
                            By qualifying for our neighborhood advertising home program, we have one of our solar engineers custom design a solar system for your home. Then we install, finance, and service that solar system all at no cost to you. All you do is pay for the power our array produces which is anywhere from 20-40% less than you were paying for traditional power. And we give you a set rate. You know how much you pay at all times and you can plan for the future. With a fixed rate, you know how much your bill will be every year. That means no spikes in cost and no surprises. We call it our $0 down and pay as you go reward.
                            </p>
                        </nav>
                        <img src={manSolar} />
                    </nav>
                </div>
                <div id='hr-border'></div>
                <div className='landing-btm-map'>
                    <p className='landing-btm-nation'>Currently, this is the Elevate Solar coverage area. Keep in mind we are growing at SOLAR speed.
                    18 months ago there were only 4 states that were consuming solar energy, but now we are NATIONWIDE</p>
                    <img alt='Map' src={map} />
                    <p className='landing-btm-map-title'>Ready to Learn More About Home Solar Power?</p>
                    <p className='landing-btm-map-text'>Good! We encourage you to do your research so that you can feel completely comfortable before you get started on your home solar power journey. The pages in this section were designed to help you understand how home solar power works, all the steps of solar panel design and solar installation, and the environmental advantages of solar energy.</p>
                </div>
            </section>
        </div>
    )
}

export default Landing