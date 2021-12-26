import React, { useState } from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './components/Pages/SignInPage';
import SignUpPage from './components/Pages/SignUpPage';
import PostContainer from './components/Posts/PostContainer';
import './App.css';

// store the token in memory via the useState hook

function App() {

  const [token, setToken] = useState<string>('');

  if(!token) {
    // notice if you try to visit another route you wont be able to.
    return <SignUpPage setToken={setToken} />
  }

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