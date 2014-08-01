var express = require('express');
var router = express.Router();

/* GET admin console */
router.get('/', function(req, res) {
    res.render('admin', { title: 'Admin Console' });
});

module.exports = router;
