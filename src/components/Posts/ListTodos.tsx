import React, { useEffect, useState } from 'react';
// import EditTodo from './EditTodo';
import Header from './Header';
import Row from './Row';

const ListTodos = () => {

  const [todos, setTodos] = useState<any[]>([]);

  // const deleteTodo = async (id) => {
  //   try {
  //     const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
  //       method: "DELETE"
  //     });
  //     // 'Property does not exist on type 'never' until you added <any[]> to the useState hook
  //     setTodos(todos.filter(todo => todo.todo_id !== id))
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

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
      <table>
        <thead>
          <Header />
        </thead>
        <tbody>
          {todos.map(todo => (
            <Row todo={todo} todos={todos} setTodos={setTodos} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListTodos;

/*
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
*/