var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  var message = 'Home';

  res.render('pages/home', {
    message : message
  });
});

module.exports = router;