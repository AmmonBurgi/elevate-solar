module.exports = {
    getTime: (req, res) => {
        const {date} = req.query
        const db = req.app.get('db')

        console.log(date)

        db.get_time(date)
        .then(time => {
            res.status(200).send(time)
        }).catch(err => {
            console.log(err)
            res.status(500).send('Could not find time!')
        })
    }
}