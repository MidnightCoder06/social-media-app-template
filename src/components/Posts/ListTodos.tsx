import React, { useEffect, useState } from 'react';
import Header from './Header';
import Row from './Row';
import Pagination from '../Pagination';
import '../../styles/ListTodos.css';

const ListTodos = () => {

  const [todos, setTodos] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const getTodos = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      // by default a get request
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();
      setTodos(jsonData)
    } catch (err) {
      console.error(err)
      setHasError(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
    {hasError && <p>Something went wrong.</p>}
    {
      isLoading ? (
        <p> Loading ...</p>
      ) :
        (
          <>
            <div className='thead'>
              <Header />
            </div>
            <div className='tbody'>
              {todos.map(todo => (
                <Row key={todo.todo_id} todo={todo} todos={todos} setTodos={setTodos} />
              ))}
            </div>
            {
              todos.length > 0 ? (
                <Pagination data={todos} />
              ) : (
                <div className='defaultText'> no tasks to display </div>
              )
            }
          </>
        )
    }
    </>
  );
}

export default ListTodos;