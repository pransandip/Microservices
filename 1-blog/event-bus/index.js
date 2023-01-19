const express = require('express');
const cors = require('cors')
const axios = require('axios')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;
    console.log({ event })
    events.push(event)

    //posts
    axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
        console.log(err.message);
    });

    //comments
    axios.post('http://comments-srv:4001/events', event).catch((err) => {
        console.log(err.message);
    });

    //query
    axios.post('http://query-srv:4002/events', event).catch((err) => {
        console.log(err.message);
    });

    //moderation
    axios.post('http://moderation-srv:4003/events', event).catch((err) => {
        console.log(err.message);
    });

    res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
    res.send(events)
})

app.listen(4005, () => {
    console.log('Event-Bus Listening on port 4005')
})
