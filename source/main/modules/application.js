var express = require('express');

express()

  .use('/resources/static', express.static('./target/resources/static'))

  .set('view engine', 'jade')

  .set('views', './target/resources/templates')

  .get('/resources/templates/:id(*).(htm|html)', function (request, response) {
    response.render(request.params.id);
  })

  .get('/resources/models/threads.json', function (request, response) {
    response.json([
      {
        id: 'engineering',
        title: 'Engineering'
      },
      {
        id: 'sciense',
        title: 'Sciense'
      },
      {
        id: 'music',
        title: 'Music'
      },
      {
        id: 'places',
        title: 'Places'
      },
      {
        id: 'beyond',
        title: 'Beyond'
      }
    ]);
  })

  .get('/(*)', function (request, response) {
    response.render("index", {
      application: {
        title: 'Weekdays'
      },
      system: {
        path: '/'
      }
    });
  })

  .listen(process.env.PORT || 5000);
