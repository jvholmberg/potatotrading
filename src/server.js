/* eslint-disable */


const express = require('express');

const port = process.env.PORT || 5000;
const app = express()

// Load endpoints
require('./sagas/auth/__mocks__')(app);
require('./sagas/sessions/__mocks__')(app);

app.listen(port, () => console.log(`Mock listening on port ${port}!`));
