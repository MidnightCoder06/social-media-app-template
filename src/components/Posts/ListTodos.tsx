import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodos = () => {

  const [todos, setTodos] = useState<any[]>([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });
      // 'Property does not exist on type 'never' until you added <any[]> to the useState hook
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  const getTodos = async () => {
    try {
      // by default a get request
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();

      //console.log(jsonData)
      setTodos(jsonData)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td><EditTodo todo={todo} /></td>
              <td>
                <button
                  onClick={() => deleteTodo(todo.todo_id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListTodos;