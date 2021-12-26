import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useToken from './utils/useToken';
import Home from './components/Home';
import SignInPage from './components/Pages/SignInPage';
import SignUpPage from './components/Pages/SignUpPage';
import PostContainer from './components/Posts/PostContainer';
import './App.css';



function App() {

  const { token, setToken } = useToken()

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