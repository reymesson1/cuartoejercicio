module.exports = function(db,app){
    

    db.addRoute({"id":"1","price":"123.00","shippingto":"Distrito Nacional","status":"active"});
    db.addRoute({"id":"2","price":"1123.00","shippingto":"Azua","status":"active"});
    db.addRoute({"id":"3","price":"2123.00","shippingto":"Bahoruco","status":"active"});
    db.addRoute({"id":"4","price":"3123.00","shippingto":"Barahona","status":"active"});
    db.addRoute({"id":"5","price":"5123.00","shippingto":"Dajabón","status":"active"});
    db.addRoute({"id":"6","price":"5123.00","shippingto":"Duarte","status":"active"});
    db.addRoute({"id":"7","price":"4123.00","shippingto":"Elías Piña","status":"active"});
    db.addRoute({"id":"8","price":"4123.00","shippingto":"El Seibo","status":"active"});
    db.addRoute({"id":"9","price":"4123.00","shippingto":"Espaillat","status":"active"});
    db.addRoute({"id":"10","price":"4123.00","shippingto":"Independencia","status":"active"});
    db.addRoute({"id":"11","price":"1023.00","shippingto":"La Altagracia","status":"active"});
    db.addRoute({"id":"12","price":"923.00","shippingto":"La Romana","status":"active"});
    db.addRoute({"id":"13","price":"923.00","shippingto":"La Vega","status":"active"});
    db.addRoute({"id":"14","price":"2023.00","shippingto":"María Trinidad Sánchez","status":"active"});
    db.addRoute({"id":"15","price":"5123.00","shippingto":"Monte Cristi","status":"active"});
    db.addRoute({"id":"16","price":"5123.00","shippingto":"Pedernales","status":"active"});
    db.addRoute({"id":"17","price":"1123.00","shippingto":"Peravia","status":"active"});
    db.addRoute({"id":"18","price":"4123.00","shippingto":"Puerto Plata","status":"active"});
    db.addRoute({"id":"19","price":"4123.00","shippingto":"Hermanas Mirabal","status":"active"});
    db.addRoute({"id":"20","price":"6123.00","shippingto":"Samaná","status":"active"});
    db.addRoute({"id":"21","price":"2123.00","shippingto":"San Cristóbal","status":"active"});
    db.addRoute({"id":"22","price":"2123.00","shippingto":"San Juan","status":"active"});
    db.addRoute({"id":"23","price":"1123.00","shippingto":"San Pedro de Macorís","status":"active"});
    db.addRoute({"id":"24","price":"1123.00","shippingto":"Sánchez Ramírez","status":"active"});
    db.addRoute({"id":"25","price":"2123.00","shippingto":"Santiago","status":"active"});
    db.addRoute({"id":"26","price":"2123.00","shippingto":"Santiago Rodríguez","status":"active"});
    db.addRoute({"id":"27","price":"2123.00","shippingto":"Valverde","status":"active"});
    db.addRoute({"id":"28","price":"1123.00","shippingto":"Monseñor Nouel","status":"active"});
    db.addRoute({"id":"29","price":"3123.00","shippingto":"Monte Plata","status":"active"});
    db.addRoute({"id":"30","price":"2123.00","shippingto":"Hato Mayor","status":"active"});
    db.addRoute({"id":"31","price":"2123.00","shippingto":"San José de Ocoa","status":"active"});
    db.addRoute({"id":"32","price":"123.00","shippingto":"Santo Domingo","status":"active"});
    
    app.post('/routes/:data/:data2', function(req,res){

        var route = req.params.data.split(',');
        var shippingto = req.params.data2.split(',');

        db.addRoute({"id":"33","price":route[0],"shippingto":shippingto[0],"status":"active"});
        

    })

    app.get('/routes', function(req,res){
        

        var routes = db.getRoutes();
        
        res.send(routes);
    })

}