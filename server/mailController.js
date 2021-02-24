const sgMail = require('@sendgrid/mail')

module.exports = {
    careerMail: (req, res) => {
        const {name, email, phone, address, about} = req.body

        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
        to: 'ammonburgi@gmail.com',
        from: 'elevate.energy.mail@gmail.com',
        subject: 'Application',
        html: 
        `<div>
            <strong>Name: ${name}<br></br>Email: ${email}<br></br>Phone: ${phone}<br></br>Address: ${address}</strong>
            <p>${about}</p>
        </div>`,
        }

        sgMail.send(msg)
        .then(() => {
            res.status(200).send({response: 'Message Sent!'})
        })
        .catch((error) => {
            res.status(500).send({response: 'Message Did not send!'})
            console.log(error)
        })
    }
}