var express = require('express');

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

    .get('/thread/:id/items.json', function (request, response) {
      response.json([
        {
          id: 'item1',
          threadId: request.params.id,
          title: 'Item 1'
        },
        {
          id: 'item2',
          threadId: request.params.id,
          title: 'Item 2'
        },
        {
          id: 'item3',
          threadId: request.params.id,
          title: 'Item 3'
        }
      ]);
    })
