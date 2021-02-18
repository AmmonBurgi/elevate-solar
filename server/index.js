require('dotenv').config()
const express = require('express'),
    // massive = require('massive'),
    {CONNECTION_STRING, SERVER_PORT} = process.env,
    port = SERVER_PORT,
    app = express()

    app.use(express.json())

    // massive({
    //     connectionString: CONNECTION_STRING,
    //     ssl: {rejectUnauthorized: false}
    // }).then(db => {
    //     app.set('db', db)
    //     console.log('db connected')
    // })
    app.listen(port, () => console.log(`server listening on port ${port}`))