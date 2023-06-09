const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/api-route')(app);
require('./routes/html-route')(app);
app.listen(PORT, function() {
    console.log('Application listening http://localhost:' + PORT);
});

