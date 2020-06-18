var express = require('express'),
    covid   = require('novelcovid'),
    router  = express.Router();

router.get('/search', (req, res) => {
    var Country = req.query.country;
    covid.countries({country: Country}).then( (country)=> {
        res.render('search',{country : country});
    });
});


module.exports = router;