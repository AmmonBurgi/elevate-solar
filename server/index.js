require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    {CONNECTION_STRING, SERVER_PORT} = process.env,
    mailCtrl = require('../server/mailController.js'),
    bookingCtrl = require('../server/bookingController'),
    port = SERVER_PORT,
    app = express()

    app.use(express.json())

    // SendGrid Endpoints
    app.post('/api/mail/career', mailCtrl.careerMail)
    app.post('/api/mail/quote', mailCtrl.quote)

    // Booking Endpoints
    app.get('/api/booking/time', bookingCtrl.getTime)


    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db)
        console.log('db connected')
    })

    app.listen(port, () => console.log(`server listening on port ${port}`))