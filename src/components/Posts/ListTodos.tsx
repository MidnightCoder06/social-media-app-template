import React, { useEffect, useState } from 'react';
import Header from './Header';
import Row from './Row';

const ListTodos = () => {

  const [todos, setTodos] = useState<any[]>([]);

  const getTodos = async () => {
    try {
      // by default a get request
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();
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