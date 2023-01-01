const express = require('express');
const cors = require('cors')
const axios = require('axios')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/events', (req, res) => {
    const event = req.body;
    console.log({ event })

    axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
    });

    axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
    });

    axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: 'OK' });
});

app.listen(4005, () => {
    console.log('Event-Bus Listening on port 4005')
})
