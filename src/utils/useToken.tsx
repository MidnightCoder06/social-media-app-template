import { useState } from 'react';

export default function useToken() {

/*
Now you need to retrieve the token to render the correct page. Inside the getToken function, call sessionStorage.getItem. This method takes a key as an argument and returns the string value. Convert the string to an object using JSON.parse, then return the value of token:
You need to use the optional chaining operator—?.—when accessing the token property because when you first access the application, the value of sessionStorage.getItem('token') will be undefined. If you try to access a property, you will generate an error.
*/
  const getToken = (): string | void => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = tokenString ? JSON.parse(tokenString) : undefined;
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

/*
save the userToken argument to sessionStorage using the setItem method. 

This method takes a key as a first argument and a string as the second argument. 
That means you’ll need to convert the userToken from an object to a string using the JSON.stringify function. 
Call setItem with a key of token and the converted object.
*/
  const saveToken = (userToken): void => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}