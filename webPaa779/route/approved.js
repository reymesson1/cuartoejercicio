module.exports = function(db,app){

    app.post('/approved/:items', function(req,res){

        var items = req.params.items.split(',');
        
        for(var x=0;x<items.length;x++){
            
            console.log(items[x]);  
        
        }
        

        var data = db.getApproved();

        var id = data.length+1;
                
        db.addApproved({"id":id,"total":123.00,"items":items,"username":"admin"});  

    });

    app.get('/approved', function(req,res){

        var data = db.getApproved();
        
        console.log(data);

        res.send(data);
    });

}