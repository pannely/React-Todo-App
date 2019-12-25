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

router.post('/', function (req, res){
	db.Todo.create(req.body)
	.then(function(newTodo){
		res.status(201).json(newTodo);
	})
	.catch(function(err){
		res.send(err);
	});
});

router.get('/:todoId', function(req, res){
	db.Todo.findById(req.params.todoId/* this is the unique id */)
	.then(function(foundTodo){
		res.json(foundTodo)
	})
	.catch(function(err) {
		res.send(err);
	})
})

router.put('/:todoId', function(req,res){
	db.Todo.findOneAndUpdate({_id:req.params.todoId}, req.body, {new:true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err);
	})
})

router.delete('/:todoId', function(req, res){
	db.Todo.remove({_id: req.params.todoId})
	.then(function(){
		res.json({message:'we deleted it'})
	})
	.catch(function(err){
		res.send(err);
	})
});


module.exports = router;