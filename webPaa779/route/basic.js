module.exports = function(db,app){
    
    app.post('/basic/:data', function(req,res){

        var basic = req.params.data.split(',');

        db.addBasic({"id":"1","price":basic[0],"status":"active"});

        
    })

    app.get('/basic', function(req,res){

        var basics = db.getBasics();

        res.send(basics);
    })

}