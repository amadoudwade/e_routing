var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Page d accueil' });
});

router.get('/service', function(req, res, next) {
  res.render('service');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
