/* eslint-disable */

const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

const LATENCY_MULTIPLIER = 3000;
const latencySim = () => Math.floor((Math.random() * LATENCY_MULTIPLIER) + 1);
const latency = (next) => setTimeout(next, latencySim());

require('./endpoints/users')(app, latency);
require('./endpoints/auth')(app, latency);
require('./endpoints/profile')(app, latency);
require('./endpoints/sessions')(app, latency);
require('./endpoints/settings')(app, latency);

app.listen(port, () => console.log(`Mock listening on port ${port}!`));
