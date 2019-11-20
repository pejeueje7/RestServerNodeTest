const express = require('express');

const app = express();

app.use(require('./user.controller'));
app.use(require('./login.controller'));
app.use(require('./role.controller'));
app.use(require('./group.controller'));


module.exports = app;
