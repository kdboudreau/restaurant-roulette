var express = require('express');
const app = require('../../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    app.use(express.static(__dirname + '/public'));
});

module.exports = router;
