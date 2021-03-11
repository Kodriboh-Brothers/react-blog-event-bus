'use strict';

require('dotenv').config();
const bodyParser = require('body-parser');
const axios = require('axios');

const app = require('express')();
app.use(bodyParser.json());

const port = process.env.EVENT_BUS_PORT || 4005;

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events', event);
    axios.post('http://localhost:4001/events', event);
    axios.post('http://localhost:4002/events', event);

    res.send({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Event Bus listening on port: ${port}`);
});