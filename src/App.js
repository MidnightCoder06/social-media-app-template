import React from 'react';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './components/Pages/SignInPage';
import SignUpPage from './components/Pages/SignUpPage';
import './App.css';

function App() {
  return (
      <div className="container">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/sign-in" element={ <SignInPage /> } />
          <Route path="/sign-up" element={ <SignUpPage /> } />
          {/*
          <InputTodo />
          <ListTodos />
        */}
        </Routes>
      </div>
  );
}

export default App;