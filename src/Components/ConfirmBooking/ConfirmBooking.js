import React, {useEffect, useState} from 'react'

import './confirmBooking.css'
import logo from '../../logo_transparent_background.webp'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

function ConfirmBooking(props){
    const [fadeToggle, setFadeToggle] = useState(false),
        [compToggle, setCompToggle] = useState(false),
        [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [phone, setPhone] = useState(''),
        [about, setAbout] = useState('')

    useEffect(() => {
        window.scrollTo(0,0)
        const timer = setTimeout(() => {
            setFadeToggle(true)
          }, 100);
          return () => clearTimeout(timer)
    }, [])

    return (
        <div className={fadeToggle === true ? 'confirm-booking-component' : 'no-booking'}>
            {props.location.state === undefined ? 
            <p>Please go back <b onClick={() => props.history.push('/booking')}>here</b> to select a date and time!</p>
            :
            <div className='confirm-booking-form'>
                <div className='booking-form-header'>
                    <nav>
                        <p>Add Your Info</p>
                        <p 
                        onClick={() => props.history.goBack()}
                        id='booking-back-arrow'><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> Back</p>
                    </nav>
                    <img src={logo} alt='Elevate Logo' /> 
                </div>
                <section className='booking-main-section'>
                    <div className='booking-input-section'>
                        <p id='header-about-text'>Tell us a bit about yourself.</p>
                        <nav>
                            <label>Name*</label>
                            <input 
                            value={name}
                            id='confirm-name-input' 
                            onChange={(e) => setName(e.target.value)} />
                        </nav>
                        <nav>
                            <label>Email*</label>
                            <input 
                            value={email}
                            id='confirm-email-input' 
                            onChange={(e) => setEmail(e.target.value)} />
                        </nav>
                        <nav>
                            <label>Phone Number</label>
                            <input 
                            value={phone}
                            id='confirm-phone-input' 
                            onChange={(e) => setPhone(e.target.value)} />
                        </nav>
                        <nav>
                            <label>Add a Message</label>
                            <textarea 
                            value={about}
                            id='confirm-message-input' 
                            onChange={(e) => setAbout(e.target.value)} />
                        </nav>
                    </div>
                    <div className='confirm-booking-section'>
                        <p className='confirm-title'>Let's Meet!</p>
                        <p className='confirm-free'>1 hr | Free Service</p>
                        <hr></hr>
                        <p className='confirm-date-display'>{props.location.state}</p> 
                        <button className='confirm-next-button'>Confirm</button>
                    </div>
                </section>
            </div>}
        </div>
    )
}

export default ConfirmBooking