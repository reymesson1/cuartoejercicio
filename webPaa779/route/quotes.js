module.exports = function(app){
    
    app.get('/quotes', function(req,res){

            var quotes = [

                {"id":7589,"startdate":"08/11/2017","enddate":"11/08/2017","currency":"USD","status":"novel","shippingto":"Read the Book","total":"151.00","drivername":"I should read the **whole** book","username":"#BD8D31"},
                {"id":7590,"startdate":"08/11/2017","enddate":"11/08/2017","currency":"USD","status":"novel","shippingto":"Write some code","total":"151.00","drivername":"Code along with the samples in the book at [github](https://github.com/pro-react)","username":"#3A7E28"},
                {"id":7654,"startdate":"08/11/2017","enddate":"11/08/2017","currency":"USD","status":"novel","shippingto":"Learning chapter 7","total":"151.00","drivername":"Performance Tuning","username":"#c9c9c9"},
                {"id":7648,"startdate":"08/11/2017","enddate":"11/08/2017","currency":"USD","status":"novel","shippingto":"Learning chapter 7","total":"151.00","drivername":"Architecting React application with Flux","username":"#f6ff64"}
            ];


        res.send(quotes);
    });

}