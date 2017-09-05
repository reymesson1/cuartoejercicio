var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

var db = require('./lib/db-helpers.js')();

var quoteField = require('./route/quoteField');
var quotes = require('./route/quotes');
var approved = require('./route/approved');
var basic = require('./route/basic');
var routes = require('./route/routes');
var currency = require('./route/currency');
var adminCookie = require('./administration/adminCookie');
var cards = require('./business/cards');

db.addUser({"id":"1","username":"admin","password":"1234"});
db.addBasic({"id":"1","price":"151.00","status":"active"});
    
        
quoteField(app);
quotes(app);
approved(db,app);
basic(db,app);
currency(db,app);
routes(db,app);
adminCookie(db,app);
cards(db,app);


app.listen(8081, function(){

    console.log('Listening from 8081...');
});
