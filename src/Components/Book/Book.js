import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import Calender from 'react-calendar'
import axios from 'axios'

import 'react-calendar/dist/Calendar.css';

function Book(){
    const [bookDate, setBookDate] = useState(new Date()),
        [timeArray, setTimeArray] = useState(['11:00 am', '11:30 am', '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm', '3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm'])

    useEffect(() => {
        getAvailableTimes(bookDate)
    }, [])

    const timeMap = timeArray.map((element, index) => {
        return (
            <button key={index}>{element}</button>
        )
    })

    const getAvailableTimes = (d) => {
        const date = `${d}`
        const newDate = date.split(' ')
        const format = newDate.map((e,i) => i < 4 ? e : null)

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

    // console.log(timeArray)
    return (
        <div>
            <div>
                <Calender
                onChange={(date) => setBookDate(date)}
                value={bookDate}
                onClickDay={(value) => getAvailableTimes(value)}
                minDetail='year'
                />
            </div>
            <div>
                {timeMap}
            </div>
        </div>
    )
}

export default Book