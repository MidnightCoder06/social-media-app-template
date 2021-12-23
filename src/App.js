import React from 'react';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className="container">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          {/*
          <InputTodo />
          <ListTodos />
        */}
        </Routes>
      </div>
  );
}

export default App;