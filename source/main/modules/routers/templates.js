var express = require('express');

module.exports = express.Router()

    .get('/:template(*).(htm|html)', function (request, response) {
      response.render(request.params.template);
    });
