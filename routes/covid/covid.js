var express = require('express'),
    covid   = require('novelcovid'),
    route   = express.Router();

covid.settings({
    baseUrl: 'https://disease.sh'
});

route.get('/', (req, res) => {
    covid.all().then((Response) => {
        covid.countries().then( (Cases) => {
            res.render('landing', {Countries : Response, conCase : Cases})
        })
    });
    
});

route.get('/covid', ( req, res ) => {
    covid.gov('india').then((Response) => {
        res.render('india', {Cases: Response});
    });
})

route.get('/covid/:country', (req, res) => {
    var Country = req.params.country;
    covid.countries({country: Country}).then( (country)=> {
        res.render('show',{country : country});
    });
});

module.exports = route;