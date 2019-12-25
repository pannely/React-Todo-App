var express =require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos')

//these lines allow the body to request by a post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
		res.sendFile("index.html");
	});

app.use('/api/todos', todoRoutes); //prefix for router routes


app.listen(port, function(){
	console.log("App is running on port" + process.env.PORT);

});