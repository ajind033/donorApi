var express = require('express');
var router = express.Router();
var ProtoneCTRL = require('..//controllers/prservice.controller.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Post new Customer page
router.post('/newdonor', function(req, res) {
  return ProtoneCTRL.create(req,res);
});

// Get a new customer
router.get('/getdonor', function(req, res) {
  var blood1 = req.query.blood;
  console.log(blood1);
  return ProtoneCTRL.getaCust(req,res,blood1);
});

module.exports = router;
