import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './components/Pages/SignInPage';
import SignUpPage from './components/Pages/SignUpPage';
import PostContainer from './components/Posts/PostContainer';
import './App.css';

function App() {
  return (
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/sign-in" element={ <SignInPage /> } />
          <Route path="/sign-up" element={ <SignUpPage /> } />
          <Route path="/posts" element={ <PostContainer /> } />
        </Routes>
      </div>
  );
}

export default App;