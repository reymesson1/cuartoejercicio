module.exports = function(db,app){
    
    app.post('/currency/:data', function(req,res){

        var currency = req.params.data.split(',');

        db.addCurrency({"id":"1","price":currency[0],"status":"active"});

    })

    app.get('/currency', function(req,res){

        var currencies = db.getCurrencies();

        res.send(currencies);
    })

}