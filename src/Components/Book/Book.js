import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import Calender from 'react-calendar';
import axios from 'axios';

import './book.css';
import logo from '../../logo_transparent_background.webp';
import 'react-calendar/dist/Calendar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

function Book(props){
    const [fadeToggle, setFadeToggle] = useState(false),
        [bookDate, setBookDate] = useState(new Date()),
        [timeArray, setTimeArray] = useState(['11:00 am', '11:30 am', '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm']),
        [bookTime, setBookTime] = useState('')

    const today = new Date()

    useEffect(() => {
        window.scrollTo(0,0)
        getAvailableTimes(bookDate)
        const timer = setTimeout(() => {
            setFadeToggle(true)
          }, 100);
          return () => clearTimeout(timer)
    }, [])

    const getAvailableTimes = (d) => {
        setBookTime('')

        const date = `${d}`
        const format = date.split(' ').filter((e, i) => i < 4).join(' ')

        if(d <= today){
            return setTimeArray([])
        }

        axios.get(`/api/booking/time/?date=${format}`)
        .then(res => {
            console.log(res.data)
            const defaultTime = ['11:00 am', '11:30 am', '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm']
            const bookedTimes = res.data.map(e => e.time)

            const filter = defaultTime.filter(e => {
                return !bookedTimes.includes(e)
            }) 
            setTimeArray(filter)
        }).catch(err => console.log(err))
    }

    const determineDisabled = (a, d, v) => {
        return d.getDay() === 0 || d.getDay() === 6 
    }

    const timeMap = timeArray.map((element, index) => {
        return (
            <button onClick={() => setBookTime(element)} className={element === bookTime ? 'focus-book-date' : 'book-date-buttons'} key={index}>{element}</button>
        )
    })

    const convertDate = () => {
        const stringDate = `${bookDate}`

        return stringDate.split(' ').filter((e, i) => i < 4).join(' ')
    }

    const handleNext = (date, time) => {
        props.history.push({pathname: '/booking/confirm', state: {date: date, time: time}})
    }

    return (
        <div className={fadeToggle === false ? 'no-book' : 'book-component'}>
            <div className='booking-form'>
                <div className='booking-form-header'>
                    <nav>
                        <p>Schedule Online</p>
                        <p 
                        onClick={() => props.history.goBack()}
                        id='booking-back-arrow'><FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> Back</p>
                    </nav>
                    <img src={logo} alt='Elevate Logo' /> 
                </div>
                <div id='booking-calendar'>
                    <Calender
                    className='calendar'
                    onChange={(date) => setBookDate(date)}
                    value={bookDate}
                    onClickDay={(value) => getAvailableTimes(value)}
                    minDetail='year'
                    tileDisabled={({activeStartDate, date, view}) => determineDisabled(activeStartDate, date, view)}
                    />
                </div>
                <div className='booking-times'>
                    <div className='times-list'>
                        {timeMap.length === 0 ? ('No available spots. Please try a different date.') : (timeMap)}
                    </div>
                    <div className='confirm-booking-section'>
                        <p className='confirm-title'>Let's Meet!</p>
                        <p className='confirm-free'>1 hr | Free Service</p>
                        <hr></hr>
                        {bookTime.length !== 0 ? 
                        <p className='confirm-date-display'>{convertDate()} | {bookTime}</p> 
                        :
                        <p className='confirm-select-time'>Please select a time!</p>}
                        <button disabled={bookDate.length === 0 || bookTime.length === 0 ? 'disabled' : null} onClick={() => handleNext(convertDate(), bookTime)} className='confirm-next-button'>Next</button>
                    </div>
                    <div className='confirm-booking-section-phone'>
                        <div>
                            <nav>
                                <p className='confirm-title'>Let's Meet!</p>
                                <p className='confirm-free'>1 hr | Free Service</p>
                            </nav>
                            {bookTime.length !== 0 ? 
                            <p className='confirm-date-display'>{convertDate()} | {bookTime}</p> 
                            :
                            <p className='confirm-select-time'>Please select a time!</p>}
                        </div>
                        <button disabled={bookDate.length === 0 || bookTime.length === 0 ? 'disabled' : null} onClick={() => handleNext(convertDate(), bookTime)} className='confirm-next-button'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book