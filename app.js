var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    covid   = require('./routes/covid/covid'),
    search  = require('./routes/search/search');

app.set('port', process.env.PORT || 3000 );
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.use(covid);
app.use(search);

app.listen(app.get('port'), ()=>{
    console.log("server is up and running");
})