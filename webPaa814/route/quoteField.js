module.exports = function(app){

    app.get('/quotefield', function(req,res){
    
    var quotefield = [

            {"id":"formControlsStartDate","category":"novel","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"novel","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"novel","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},                
            {"id":"formControlsDriverName","category":"novel","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"},        



            {"id":"formControlsStartDate","category":"poem","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"poem","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"poem","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},            
            {"id":"formControlsShippingTo","category":"poem","name":"shippingto", "type":"select","label":"Shipping To", "placeholder":"Shipping To"},
            {"id":"formControlsDriverName","category":"poem","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"},        

            {"id":"formControlsStartDate","category":"fabel","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"fabel","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"fabel","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},
            {"id":"formControlsShippingTo","category":"fabel","name":"shippingto", "type":"select","label":"Shipping To", "placeholder":"Shipping To", "componentClass":"select"},
            {"id":"formControlsDriverName","category":"fabel","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"},        

            {"id":"formControlsStartDate","category":"biography","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"biography","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"biography","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},
            {"id":"formControlsShippingTo","category":"biography","name":"shippingto", "type":"select","label":"Shipping To", "placeholder":"Shipping To", "componentClass":"select"},
            {"id":"formControlsDriverName","category":"biography","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"},        

            {"id":"formControlsStartDate","category":"story","name":"startdate", "type":"date","label":"Start Date", "placeholder":"Start Date"},
            {"id":"formControlsEndDate","category":"story","name":"enddate", "type":"date","label":"End Date", "placeholder":"End Date"},        
            {"id":"formControlsCurrency","category":"story","name":"currency", "type":"text","label":"Currency", "placeholder":"Currency"},
            {"id":"formControlsShippingTo","category":"story","name":"shippingto", "type":"select","label":"Shipping To", "placeholder":"Shipping To", "componentClass":"select"},
            {"id":"formControlsDriverName","category":"story","name":"drivername", "type":"text","label":"Driver Name", "placeholder":"Driver Name"},        
        ];

        res.send(quotefield);
    });
    
    app.get('/quoteLocation', function(req,res){
        
        var quoteLocation = [
        
            {"id":"1","country":"1", "providence":"Distrito Nacional"},
            {"id":"2","country":"1", "providence":"Azua"},
            {"id":"3","country":"1", "providence":"Bahoruco"},
            {"id":"4","country":"1", "providence":"Barahona"},
            {"id":"5","country":"1", "providence":"Dajabón"},
            {"id":"6","country":"1", "providence":"Duarte"},
            {"id":"7","country":"1", "providence":"Elías Piña"},
            {"id":"8","country":"1", "providence":"El Seibo"},
            {"id":"9","country":"1", "providence":"Espaillat"},
            {"id":"10","country":"1", "providence":"Independencia"},
            {"id":"11","country":"1", "providence":"La Altagracia"},
            {"id":"12","country":"1", "providence":"La Romana"},
            {"id":"13","country":"1", "providence":"La Vega"},
            {"id":"14","country":"1", "providence":"María Trinidad Sánchez"},
            {"id":"15","country":"1", "providence":"Monte Cristi"},
            {"id":"16","country":"1", "providence":"Pedernales"},
            {"id":"17","country":"1", "providence":"Peravia"},
            {"id":"18","country":"1", "providence":"Puerto Plata"},
            {"id":"19","country":"1", "providence":"Hermanas Mirabal"},
            {"id":"20","country":"1", "providence":"Samaná"},
            {"id":"21","country":"1", "providence":"San Cristóbal"},
            {"id":"22","country":"1", "providence":"San Juan"},
            {"id":"23","country":"1", "providence":"San Pedro de Macorís"},
            {"id":"24","country":"1", "providence":"Sánchez Ramírez"},
            {"id":"25","country":"1", "providence":"Santiago"},
            {"id":"26","country":"1", "providence":"Santiago Rodríguez"},
            {"id":"27","country":"1", "providence":"Valverde"},
            {"id":"28","country":"1", "providence":"Monseñor Nouel"},
            {"id":"29","country":"1", "providence":"Monte Plata"},
            {"id":"30","country":"1", "providence":"Hato Mayor"},
            {"id":"31","country":"1", "providence":"San José de Ocoa"},
            {"id":"32","country":"1", "providence":"Santo Domingo"},

        ]    
        
        res.send(quoteLocation)
    })
}