const express = require('express');
const app = express();
const cors = require('cors'); // https://www.npmjs.com/package/cors
// const pool = require('../database/db'); // module.exports = pool
const { pool } = require('../database/db'); // module.exports = { pool }

// middleware
app.use(cors());
app.use(express.json()); // gives us access to req.body

// Routes
  // data fetching is going to take some time so should be async ... to wait for response
  // the actual crud operations happen in the database itself

  /*
  res.json()
  Sends a JSON response composed of the specified data.
  return res.json(data);
  The res.json() function sends a JSON response.
  This method sends a response (with the correct content-type)
    that is the parameter converted to a JSON string using the JSON.stringify() method.
  It returns the response to the client.
  */

// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body // coming from the client side
    // return * so we can get all that data back
    // todo is the table name 
    // description is the column name
    // second argument defines the dollar signs 
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES($1) RETURNING *', [description]);

    res.json(newTodo.rows[0]);

  } catch (err) {
    console.error(err.message);
  }
})

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo
  // http://localhost:5000/todos/random
  // { id: 'random' } -> the `id` key maps to first argument you placed for .get()
  // it doesn't have to be called id ... you could call it app.get('/todos/:blahblah' ....)
  // http://localhost:5000/todos/random
  // { blahblah: random }

app.get('/todos/:id', async (req, res) => {
  try {
    //console.log(req.params);
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);

    res.json('todo was updated!');
  } catch (err) {
    console.error(err.message);
  }
})

// delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id]);

    res.json('todo was deleted!');
  } catch (err) {
    console.error(err.message)
  }
})


// create a user 
app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body
    const newUser = await pool.query('INSERT INTO users(first_name, last_name, email, phone_number, password) VALUES($1, $2, $3, $4, $5)', [firstName, lastName, email, phoneNumber, password]);
    res.json('created a user!');
  } catch(err) {
    console.error(err.message)
  }
})

app.listen(5000, () => {
  console.log('server has started on port 5000');
});