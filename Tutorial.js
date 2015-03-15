function testUpdate()
{
  Todo.update({ completed: false }, { completed: true }, { multi: true }, function (err, numberAffected, raw) {
  if (err) return handleError(err);
  console.log('The number of updated documents was %d', numberAffected);
  console.log('The raw response from Mongo was ', raw);
});

}


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test3');

var TodoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
});

var Todo = mongoose.model('Todo', TodoSchema);
console.log('hello');

/*Todo.find(function (err, todos) {
  if (err) return console.error(err);
  console.log(todos)
});*/

function findCallback(err, data) {
  if (err) return console.error(err);
  console.log(data);
}

//Todo.find({completed:true},findCallback);

function updateCallback(err, numberAffected, raw) {
  if (err) return handleError(err);
  console.log('The number of updated documents was %d', numberAffected);
  console.log('The raw response from Mongo was ', raw);
}

Todo.update({ completed: true }, { completed: false }, { multi: true  }, updateCallback);
