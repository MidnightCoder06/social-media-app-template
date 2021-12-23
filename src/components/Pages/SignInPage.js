import React from 'react';

// TODO: have the submit function actually get an endpoint and do a post in the database
const SignInPage = () => {
    return (
        <form>
            <h1> Sign In </h1>
            <h3> New? Create an account </h3>
            <h3> Email </h3>
            <input placeholder="email" />
            <h3> Password </h3>
            <input placeholder="password" />
            <h5> Forgot password? </h5>
            <button> Sign In </button> 
        </form>
    );
}

export default SignInPage;