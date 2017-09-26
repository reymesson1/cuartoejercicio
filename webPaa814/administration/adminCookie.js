module.exports = function(db,app){
    
    app.post('/users/:username', function(req,res){
    
        var username =  req.params.username.split(',');

        console.log(username);
        
        for(var x=0;x<username.length;x++){        
            db.addCookie({"id":"1","username":username[x],"language":"en"});
        }

    });
    
    app.get('/logout', function(req,res){
        
        db.setCookieDelete();
        res.send('successful deleted!');
    })

    app.get('/login', function(req,res){

        var users = db.getUsers();

        res.send(users);
    });
    
    app.get('/cookie', function(req,res){

        var cookies = db.getCookies();
        
        res.send(cookies);
    });

}