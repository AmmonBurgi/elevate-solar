import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './confirmBooking.css'
import logo from '../../logo_transparent_background.webp'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons'

function ConfirmBooking(props){
    const [fadeToggle, setFadeToggle] = useState(false),
        [name, setName] = useState(''),
        [email, setEmail] = useState(''),
        [phone, setPhone] = useState(''),
        [about, setAbout] = useState(''),
        [successToggle, setSuccessToggle] = useState(true),
        [conDay, setConDay] = useState(''),
        [conDayNum, setConDayNum] = useState(''),
        [conMonth, setConMonth] = useState('')

    const convertDate = () => {
        const {date} = props.location.state

        const day = date.split(' ').filter((e, i) => i === 0).join(' ')
        const dayNum = date.split(' ').filter((e, i) => i === 2).join(' ').split('').filter((el,index) => (el !== '0' || index !== 0)).join('')

        const month = date.split(' ').filter((e, i) => i === 1).join(' ')

        setConDay(day)
        setConDayNum(dayNum)
        setConMonth(month)
    }

    useEffect(() => {
        window.scrollTo(0,0)
        if(props.location.state !== undefined){
            convertDate()
        }
        const timer = setTimeout(() => {
            setFadeToggle(true)
          }, 100);
          return () => clearTimeout(timer)
    }, [])

    const handleConfirm = () => {
        const {date, time} = props.location.state
        console.log(date,date.length, time)
        axios.post('/api/mail/booking', {name, email, phone, about, date, time})
        .then(res => {
            setSuccessToggle(true)
            const {date, time, user_email} = res.data.scheduled
            console.log(res.data.scheduled)
            axios.post('/api/mail/confirmation', {date, time, user_email})
            .then((confirmEmail) => console.log(confirmEmail.data.response))
            .catch(err => console.log(err))

            console.log(res.data.response)
        }).catch(err => console.log(err))
    }

    return (
        <div className={fadeToggle === true ? 'confirm-booking-component' : 'no-booking'}>
            {props.location.state === undefined ? 
            <p className='confirm-here-text'>Please go back <b onClick={() => props.history.push('/booking')}>here</b> to select a date and time!</p>
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
                        <p className='confirm-date-display'>{`${props.location.state.date} | ${props.location.state.time}`}</p> 
                        {name.length === 0 || email.length === 0 ? <p id='confirm-missed-info'>Please fill in the required info!</p> : null}
                        <button 
                        disabled={name.length === 0 || email.length === 0 ? 'disabled' : null}
                        onClick={handleConfirm}
                        className='confirm-next-button'>Confirm</button>
                    </div>
                    
                </section>
            </div>}
            <div className={successToggle === false ? 'no-success' : 'confirm-success'}>
                <nav className='success-wrapper'>
                </nav>
                <div className='success-main'>
                    <div id='success-header'>
                        <p>Success! You are now booked.</p>
                        <p>A confirmation email is on its way to you.</p>
                        <hr></hr>
                    </div>
                    <div className='success-submit'>
                        <nav id='success-date'> 
                            <p>{conDayNum}</p>
                            <p>{conMonth}</p>
                             <hr></hr>
                             <p>{conDay} {props.location.state !== undefined ? props.location.state.time : null}</p>
                         </nav>
                        <hr></hr>
                        <nav id='success-submit-button'>
                            <p>Let's Meet!</p>
                            <p>1hr | Free Service</p>
                            <button onClick={() => props.history.push('/home')}>Home</button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmBooking