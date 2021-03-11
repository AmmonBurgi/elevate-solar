const sgMail = require('@sendgrid/mail')
const fs = require('fs')

module.exports = {
    careerMail: (req, res) => {
        const {name, email, phone, address, about, baseFile64, resumeName, resumeType} = req.body
        console.log(baseFile64)

        sgMail.setApiKey(process.env.SENDGRID_API_KEY)

        // pathToAttachment = `${resume}/${resume}`;
        // attachment = fs.readFileSync(resumeFile).toString("base64");
        // console.log(attachment)

        const msg = {
        to: 'ammonburgi@gmail.com',
        from: 'elevate.energy.mail@gmail.com',
        subject: 'Application',
        html: 
        `<div>
            <strong>Name: ${name}<br></br>Email: ${email}<br></br>Phone: ${phone}<br></br>Address: ${address}</strong>
            <p>${about}</p>
        </div>`,
        attachments: [
            {
                content: baseFile64.toString('base64'),
                filename: resumeName,
                type: resumeType,
                disposition: 'attachment'
            }
        ]
        }

        sgMail.send(msg)
        .then(() => {
            res.status(200).send({response: 'Message Sent!'})
        })
        .catch((error) => {
            res.status(500).send({response: 'Message Did not send!'})
            console.log(error)
        })
    },
    quote: async(req, res) =>{
        const {first, last, firstStreet, secondStreet, city, region, zip, country,email, homeOwner, howHear, phone} = req.body;

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: 'ammonburgi@gmail.com',
            from: 'elevate.energy.mail@gmail.com',
            subject: 'Quote',
            html: 
            `<div>
                <strong>
                    Address: ${firstStreet}${secondStreet ? `, ${secondStreet}` : null}<br></br> ${city}, ${region} ${zip}, ${country}<br></br>
                    Homeowner: ${homeOwner}
                </strong>
                <p>${howHear}</p>
                <strong>
                    ---<br></br>
                    ${first} ${last}<br></br>
                    ${email}<br></br>
                    ${phone}
                </strong>
            </div>`
            }
    
            sgMail.send(msg)
            .then(() => {
                res.status(200).send({response: 'Message Sent!'})
            })
            .catch((error) => {
                res.status(500).send({response: 'Message Did not send!'})
                console.log(error)
            })
    },
    booking: async(req, res) => {
        const db = req.app.get('db')
        const {name, email, phone, about, date, time} = req.body

        const filledBooking = await db.check_booking(date, time)

        console.log(filledBooking)
        if(filledBooking[0]){
            return res.status(500).send({response: 'Date and Time is already booked!'})
        }

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: 'ammonburgi@gmail.com',
            from: 'elevate.energy.mail@gmail.com',
            subject: 'Booking',
            html: 
            `<div>
                <strong>
                    Booking Date: ${date}<br></br>
                    Booking Time: ${time}
                </strong>
                <p>${about}</p>
                <strong>
                    ---<br></br>
                    ${name}<br></br>
                    ${email}<br></br>
                    ${phone}
                </strong>
            </div>`
            }
    
            sgMail.send(msg)
            .then(() => {
                db.add_booking(date, time, email, (phone.length === 0 ? 'N/A' : phone))
                .then((scheduled) => {
                    res.status(200).send({scheduled: scheduled, response: 'Booking stored and notified to email!'})
                }).catch(err => {
                    console.log(err)
                    res.status(500).send({response: 'Booking was not stored!'})
                })
            })
            .catch((error) => {
                res.status(500).send({response: 'Message Did not send!'})
                console.log(error)
            })        
    },
    confirmation: (req, res) => {
        const {user_email, date, time} = req.body

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: user_email,
            from: 'elevate.energy.mail@gmail.com',
            subject: 'Elevate Solar Energy Booking',
            html: 
            `<div>
                <strong>
                    Elevate Solar Energy
                </strong>
                <p>You are now scheduled for <b>${time}</b>, on <b>${date}</b>.</p>
                <p>Please call us at 850-905-0115, if you wish to cancel your appointment.</p>
                <strong>
                    ---<br></br>
                    ${email}
                </strong>
            </div>`
            }
    
            sgMail.send(msg)
            .then(() => {
                res.status(200).send({response: 'Confirmation Email Sent!'})
            })
            .catch((error) => {
                res.status(500).send({response: 'Confirmation Did not send!'})
                console.log(error)
            })
    }
}