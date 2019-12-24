var express = require('express');
var router = express.Router();
var db = require("../models") //requiring our database

router.get('/', function (req, res){
	db.Todo.find() // find all todos by connecting to our database
	.then(function(todos){
		res.json(todos);
	})
	.catch(function(err){
		res.send(err);
	});
});

module.exports = router;