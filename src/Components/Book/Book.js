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

    useEffect(() => {
        getAvailableTimes(bookDate)
        const timer = setTimeout(() => {
            setFadeToggle(true)
          }, 100);
          return () => clearTimeout(timer)
    }, [])

    const getAvailableTimes = (d) => {
        const date = `${d}`
        const newDate = date.split(' ')
        const format = newDate.map((e,i) => i < 4 ? e : null)

        const today = new Date()
        const yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1)
        if(d < yesterday){
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
            <button onClick={() => setBookTime(element)} className='book-date-buttons' key={index}>{element}</button>
        )
    })

    return (
        <div className={fadeToggle === false ? 'no-book' : 'book-component'}>
            <div className='booking-form'>
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
                    {timeMap.length === 0 ? 'No available spots. Please try a different date.' : timeMap}
                </div>
            </div>
        </div>
    )
}

export default Book