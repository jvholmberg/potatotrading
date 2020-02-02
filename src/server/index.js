/* eslint-disable */


const express = require('express');

const port = process.env.PORT || 5000;
const app = express()

require('./endpoints/auth')(app);
require('./endpoints/sessions')(app);

app.listen(port, () => console.log(`Mock listening on port ${port}!`));
