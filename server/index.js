const express = require('express');
const app = express();
const cors = require('cors'); // https://www.npmjs.com/package/cors -> This library will enable cross origin resource sharing for all routes.
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



/*
The first argument is the path the application will listen to 
and the second argument is a callback function that will run when the application serves the path. 
The callback takes a req argument, 
which contains the request data and a res argument that handles the result.
*/


// create a user 
app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body
    const newUser = await pool.query('INSERT INTO users(first_name, last_name, email, phone_number, password) VALUES($1, $2, $3, $4, $5)', [firstName, lastName, email, phoneNumber, password]);
    res.send({
      token: 'test123'
    });
  } catch(err) {
    console.error(err.message)
  }
})

// post -> create a user session 
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const existingUser = await pool.query('SELECT email, password FROM users WHERE email=$1 AND password=$2', [email, password]);
    // if user exists -> rows: [ { email: 'mySecondLove', password: 'soulCoordinates' } ],
    // if user doesn't exists -> rows: []
    if (existingUser.rows[0]) {
      res.send(existingUser.rows[0])
    } else {
      res.status(404).json('this is not a registered entity');
    }
  } catch(err) {
    console.error(err.message)
  }
})

//////// Subtasks

// get all subtasks for a given task 
app.get('/subtasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const allSubTasks = await pool.query('SELECT * FROM subtasks'); // this needs to be a join with the tasks table
    
    res.json(allSubTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// update the isCompleted boolean value of the task or subtask in whichever of those two databases
app.put('/checkbox', async (req, res) => {
  try {
    const { id, isCompleted, type} = req.body;
    if (type === 'task') {
      const updateCheckbox = await pool.query('UPDATE task SET isCompleted = $1 WHERE task_id = $2', [isCompleted, id]);
    } else if (type == 'subtask') {
      const updateCheckbox = await pool.query('UPDATE subtask SET isCompleted = $1 WHERE subtask_id = $2', [isCompleted, id]);
    } else {
      // return the appropriate error code 
    }
    // res.json('is completed status updated updated!'); -> is a res.json required?
  } catch (err) {
    console.error(err.message);
  }
})


// create a subtaks for a given task -> TODO: seed this
  // have the database auto-increment a count instead of generating a uuid on the frontend
app.post('subtask', async (req, res) => {
  try {
    const { taskId, title } = req.body
    const newSubTask = await pool.query('INSERT INTO subtasks (parentId, title) VALUES($1, $2) RETURNING *', [taskId, title]);
    // you returned all the rows and assigned it a variable
    res.json(newSubTask.rows[0]) // just peek the first / top row ... the one you just created
  } catch(err) {
    console.error(err.message);
  }
})

///// Listing on Port 5000

app.listen(5000, () => {
  console.log('server has started on port 5000');
});