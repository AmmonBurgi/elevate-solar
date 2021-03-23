require('dotenv').config()
const express = require('express'),
    massive = require('massive'),
    {CONNECTION_STRING, SERVER_PORT} = process.env,
    mailCtrl = require('../server/mailController.js'),
    bookingCtrl = require('../server/bookingController'),
    port = SERVER_PORT,
    app = express()

const path = require('path')

    app.use(express.json())
    app.use(express.static(__dirname + '/../build'))

    // SendGrid Endpoints
    app.post('/api/mail/career', mailCtrl.careerMail)
    app.post('/api/mail/quote', mailCtrl.quote)
    app.post('/api/mail/booking', mailCtrl.booking)
    app.post('/api/mail/confirmation', mailCtrl.confirmation)

    // Booking Endpoints
    app.get('/api/booking/time', bookingCtrl.getTime)


    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db)
        console.log('db connected')
        app.listen(port, () => console.log(`server listening on port ${port}`))
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'))
      });