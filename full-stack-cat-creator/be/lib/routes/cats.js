const { Router } = require('express');
const Cat = require('../models/Cat');

module.exports = Router()
  .post('/', (req, res, next) => {
    Cat
      .create(req.body)
      .then(cat => res.send(cat))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Cat
      .find()
      .then(cats => res.send(cats))
      .catch(next);
  });
