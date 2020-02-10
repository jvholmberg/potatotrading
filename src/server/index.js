/* eslint-disable */


const express = require('express');

const port = process.env.PORT || 5000;
const app = express()

require('./endpoints/users')(app);
require('./endpoints/auth')(app);
require('./endpoints/profile')(app);
require('./endpoints/sessions')(app);

app.listen(port, () => console.log(`Mock listening on port ${port}!`));
