var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.writeHead(302, {
        'Location': 'http://www.kibotu.net'
    });
    res.end();
});

module.exports = router;