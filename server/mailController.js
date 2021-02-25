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
    quote: (req, res) =>{
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
    }
}