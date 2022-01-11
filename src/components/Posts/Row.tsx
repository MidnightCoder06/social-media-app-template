import React, { useState } from 'react';
import EditTodo from './EditTodo';
import '../../styles/ListTodo.css';

const Row = (props) => {
    const { todo, todos, setTodos} = props;

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

    return (
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
    );
}

export default Row;

// <div className='todo-row'> Bob </div>