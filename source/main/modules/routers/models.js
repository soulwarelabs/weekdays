var express = require('express');
    mongoose = require('mongoose');

mongoose.connect(process.env.mongodb);

var Thread = mongoose.model('thread', new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  title: String
}));

var topLevelItems = require('./top-level-items');

/*
mongodb://guest:guest@ds053978.mongolab.com:53978/heroku_r84ptgfg
*/

module.exports = express.Router()

    .get('/threads.json', function (request, response) {

      Thread.find({}).exec(function (error, threads) {
        if (error) {
          throw error;
        }
        response.json(threads);
      }); // can not find id's => can not develope

      /*
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
      ]);*/
    })

    .get('/thread/:id.json', function (request, response) {
      response.json(topLevelItems.get(request.params.id));
    })

    .all('/(*)', function (request, response) {
      response.status(404).send('Requested resource not found!');
    });
