var express = require('express');
const { getUser } = require('../lib');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(getUser('Romain'))
  res.json(getUser('Romain'));
});

module.exports = router;
