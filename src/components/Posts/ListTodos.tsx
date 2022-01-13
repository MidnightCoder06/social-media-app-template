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
      <div className='thead'>
        <Header />
      </div>
      <div className='tbody'>
        {todos.map(todo => (
          <Row key={todo.todo_id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </>
  );
}

export default ListTodos;