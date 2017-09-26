module.exports = function(){
    
    var loki = require('lokijs');
    
    var db = new loki('loki.json');
    
    /******************Table COOKIES**********************/

    
    var cookies = db.addCollection('cookies');
    
    function addCookie(cookie){
    
        cookies.insert(cookie);
    }
    
    function getCookies(){
    
        return cookies.find();
    }
    
    function setCookieDelete(){
        
        var value = cookies.find();
        return cookies.remove(value[0]);    
    }
    
    /******************Table USERS**********************/
    
    var users = db.addCollection('users');
        
    function addUser(user){
            
        users.insert(user);
    }

    function getUsers() {
        return users.find();
    }
    
    /******************Table APROVED**********************/
    
    var approvies = db.addCollection('approvies');
        
    function addApproved(approved){
            
        approvies.insert(approved);
    }

    function getApproved() {
        return approvies.find();
    }
    
    /******************Table BASIC**********************/
    
    var basics = db.addCollection('basics');
        
    function addBasic(basic){
            
        basics.insert(basic);
    }

    function getBasics() {
        return basics.find();
    }
    
    /******************Table CURRENCY**********************/
    
    var currencies = db.addCollection('currencies');
        
    function addCurrency(currency){
            
        currencies.insert(currency);
    }

    function getCurrencies() {
        return currencies.find();
    }
    
    /******************Table ROUTES**********************/
    
    var routes = db.addCollection('routes');
        
    function addRoute(route){
            
        routes.insert(route);
    }

    function getRoutes() {
        return routes.find();
    }

    return {

        addCookie: addCookie,
        getCookies: getCookies,
        setCookieDelete: setCookieDelete,
        addUser: addUser,
        getUsers: getUsers,
        addApproved: addApproved,
        getApproved: getApproved,
        addBasic: addBasic,
        getBasics: getBasics,
        addCurrency: addCurrency,
        getCurrencies: getCurrencies,
        addRoute: addRoute,
        getRoutes: getRoutes
    }
}