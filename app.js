const app = require('express')();

app.use('/', require('express').static('./www')).listen(8080)