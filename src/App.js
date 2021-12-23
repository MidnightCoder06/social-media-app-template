import React from 'react';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <Home />
        {/*
          <InputTodo />
          <ListTodos />
        */}
      </div>
    </>
  );
}

export default App;