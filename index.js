var express =require('express'),
	app = express(),
	port = process.env.PORT || 3000;

var todoRoutes = require('./routes/todos')

app.get('/', function (req, res) {
		res.send("Hi from the root route")
	});

app.use('/api/todos', todoRoutes); //prefix for router routes

app.listen(port, function(){
	console.log("App is running on port" + process.env.PORT);

});