import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import Calender from 'react-calendar'
import axios from 'axios'

import './book.css'
import 'react-calendar/dist/Calendar.css';

function Book(){
    const [fadeToggle, setFadeToggle] = useState(false),
        [bookDate, setBookDate] = useState(new Date()),
        [timeArray, setTimeArray] = useState(['11:00 am', '11:30 am', '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm']),
        [bookTime, setBookTime] = useState('')

    const today = new Date()

    useEffect(() => {
        getAvailableTimes(bookDate)
        const timer = setTimeout(() => {
            setFadeToggle(true)
          }, 100);
          return () => clearTimeout(timer)
    }, [])

    const getAvailableTimes = (d) => {
        setBookTime('')

        const date = `${d}`
        const newDate = date.split(' ')
        const format = newDate.map((e,i) => i < 4 ? e : null)

        if(d <= today){
            return setTimeArray([])
        }

        axios.get(`/api/booking/time/?date=${format.join(' ')}`)
        .then(res => {
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
        console.log('hello')
        const stringDate = `${bookDate}`
        return stringDate.split(' ').map((e, i) => i < 4 ? e : null).join(' ')
    }

    return (
        <div className={fadeToggle === false ? 'no-book' : 'book-component'}>
            <div className='booking-form'>
                <div className='booking-form-header'>
                    <p>Schedule Online</p>
                    <img /> 
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
                        <p className='confirm-date-display'>{convertDate()}| {bookTime}</p> 
                        :
                        <p className='confirm-select-time'>Please select a time!</p>}
                        <button className='confirm-next-button'>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book