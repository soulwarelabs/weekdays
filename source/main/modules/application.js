var express = require('express');

express()

  .set('view engine', 'jade')

  .set('views', './target/resources/templates')

  .get('/resources/templates/:id(*).(htm|html)', function (request, response) {
    response.render(request.params.id, {});
  })

  .get('/(*)', function (request, response) {
    response.send('Weekdays application page');
  })

  .listen(process.env.PORT || 5000);
