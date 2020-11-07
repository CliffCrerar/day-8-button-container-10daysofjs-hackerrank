const app = require('express')();

// app.use('/', require('express').static('./www')).listen(8080)

app.use('/', require('express').static('./')).listen(8080)