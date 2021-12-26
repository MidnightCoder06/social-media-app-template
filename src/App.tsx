import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './components/Pages/SignInPage';
import SignUpPage from './components/Pages/SignUpPage';
import PostContainer from './components/Posts/PostContainer';
import './App.css';

/*
save the userToken argument to sessionStorage using the setItem method. 

This method takes a key as a first argument and a string as the second argument. 
That means you’ll need to convert the userToken from an object to a string using the JSON.stringify function. 
Call setItem with a key of token and the converted object.
*/
function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(): string | void {
  
}

function App() {

  const token = getToken()

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