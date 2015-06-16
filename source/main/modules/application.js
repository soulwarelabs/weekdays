var express = require('express');

var configuration = require('./configuration');

var modelRouter = require('./routers/models'),
    templateRouter = require('./routers/templates');

express()

  .use('/resources/static', express.static('./target/resources/static'))

  .set('view engine', 'jade')

  .set('views', './target/resources/templates')

  .use('/resources/templates', templateRouter)

  .use('/resources/models', modelRouter)

  .get('/(*)', function (request, response) {
    response.render("index", {
      application: {
        title: 'Weekdays'
      },
      system: {
        path: configuration.contextPath
      }
    });
  })

  .listen(process.env.PORT || configuration.defaultPort);
