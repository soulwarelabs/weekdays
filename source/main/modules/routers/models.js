var express = require('express');

var topLevelItems = require('./top-level-items');

module.exports = express.Router()

    .get('/threads.json', function (request, response) {
      response.json([
        {
          id: 'engineering',
          title: 'Engineering'
        },
        {
          id: 'science',
          title: 'Science'
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

    .get('/thread/:id.json', function (request, response) {
      response.json(topLevelItems.get(request.params.id));
    })

    .all('/(*)', function (request, response) {
      response.status(404).send('Requested resource not found!');
    });
