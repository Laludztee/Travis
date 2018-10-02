let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {status: 'success', title: 'HackerBay University'});
});

router.get('/data', function(req, res, next) {
    var greeting = {greeting: 'Welcome!'};
    res.render('data', greeting);
});

router.post('/data', function (req, res, next) {
    res.redirect('data', greeting);
});

module.exports = router;
