const express = require('express');
const app = express();
const cors = require('cors'); // https://www.npmjs.com/package/cors -> This library will enable cross origin resource sharing for all routes.
const bcrypt = require('bcrypt');
/*
1. create a salt 
  * needed because if you only have one hashing function 
    and then someone who has the same password will have the same hased password
    so if someone cracks one password they have access to all the other passwords that looks exactly the same
2. salt + passowrd 
    salt (unique to each user) is added to the password before hashing it so that every hashed password is unique
      *i.e. the exact same user passwords will look completely different 
*/

// const pool = require('../database/db'); // module.exports = pool
const { pool } = require('../database/db'); // module.exports = { pool }
const { DuplicateError } = require('jest-haste-map');

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


// using sql prepared statements to help avoid sql injection 

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
    res.status(200).send()
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
    // destructuring request body 
    const { firstName, lastName, email, phoneNumber, password } = req.body
    // encryption
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)
    // ensure email is unique
    const allEmailsObject = await pool.query('SELECT email FROM users');
    const rowsArray = allEmailsObject.rows
    //console.log(rowsArray)
    const duplicateEmail = rowsArray.find(existingemail => existingemail.email === email);
    //console.log(duplicateEmail)
    // do not create user -> handle error in the frontend
    if (duplicateEmail) {
      console.log('here')
      // res.send('duplicate email'); -> SyntaxError: Unexpected token d in JSON at position 0
      res.send({message: 'duplicate email'})
    } else {
      console.log('or here')
      await pool.query('INSERT INTO users(first_name, last_name, email, phone_number, password) VALUES($1, $2, $3, $4, $5)', [firstName, lastName, email, phoneNumber, hashedPassword]);
      // return token to the frontend
      res.send({
        token: 'test123'
      });
    }
    // res.status(201).send('Ok') -> Cannot set headers after they are sent to the client
  } catch(err) {
    console.error(err.message)
    // The HyperText Transfer Protocol (HTTP) 500 Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request. This error response is a generic "catch-all" response.
    res.status(500).send()
  }
})

// post -> create a user session 

/*
TODO: make two seperate requests
  1. to check email existence and send a response for that  (show error message in the frontend)
  2. if email does exist then pull out the password into a variable

  if (await bcrypt.compare(password, passwordInDatabase)) {
    res.send('Succesful login)
  } else {
    res.status(403).send('incorrect password)               (show error message in the frontend)
  }
*/

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const existingUser = await pool.query('SELECT email, password FROM users WHERE email=$1 AND password=$2', [email, password]);
    // if user exists -> rows: [ { email: 'mySecondLove', password: 'soulCoordinates' } ],
    // if user doesn't exists -> rows: []
    if (existingUser.rows[0]) {
      res.send(existingUser.rows[0]) // is this actually showing up in the console?
    } else {
      //res.status(404).json('this is not a registered entity');
      res.status(404).send('this is not a registered entity / cannot find this user');
    }
  } catch(err) {
    console.error(err.message)
    res.status(500).send()
  }
})

//////// Subtasks

// get all todos
app.get('/subtasks', async (req, res) => {
  try {
    const allSubtasks = await pool.query('SELECT * FROM subtasks');

    res.json(allSubtasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get all subtasks for a given task 
app.get('/subtasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const allSubTasks = await pool.query('SELECT * FROM subtasks WHERE task_id = $1', [id]);
    
    res.json(allSubTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// update the isCompleted boolean value of the task or subtask in whichever of those two databases
app.put('/checkbox', async (req, res) => {
  try {
    const { id, isChecked, type } = req.body; // note that these variable names must match the frontend
    if (type === 'task') {
      await pool.query('UPDATE tasks SET isCompleted = $1 WHERE task_id = $2', [isChecked, id]);
    } else if (type == 'subtask') {
      await pool.query('UPDATE subtasks SET is_completed = $1 WHERE subtask_id = $2', [isChecked, id]);
    } else {
      res.status(503).send({status: 1, message: "Messages not available!"}); 
    }
    res.json('is completed status updated updated!');
  } catch (err) {
    console.error(err.message);
  }
})

///// Listing on Port 5000

app.listen(5000, () => {
  console.log('server has started on port 5000');
});