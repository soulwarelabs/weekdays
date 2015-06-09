var express = require('express');

express()

    .get('/(*)', function (request, response) {
      response.send('Weekdays application page');
    })

    .listen(process.env.PORT || 5000);
