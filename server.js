var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id);
	var matchingTodo;

	for (var i = 0; i < todos.length; i++) {
		if(todos[i].id === todoId)
			matchingTodo = todos[i];
	}

	if(matchingTodo)
		res.json(matchingTodo);
	else
		res.status(404).send();
});

// POST /todos
app.post('/todos', function (req, res) {
	var body = req.body;

	body.id = todoNextId++;

	todos.push(body);

	res.json(newTodo);
});


app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});	