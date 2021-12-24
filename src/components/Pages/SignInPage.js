import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* TODO:

To close out point 3a of #1 
- have the sign-in button check if email & password is in database
    - if so route to the posts page
    - if not, show error text (make this a reusable component where you just pass in text as a prop)
        ^ternary showing / hiding based on useState -> setUserExistence
*/

const SignInPage = () => {

    const initialFormState = {
        email: '',
        password: ''
    }

    const [newEntity, setNewEntity] = useState(initialFormState);

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('submit');

        /*
        if (checkUserExistence(newEntity.email, newEntity.password)) {
            navigage('/posts')
        } else {
            setUserExistence(false)
        }

        */
    }

    const handleChange = e => {
        if (e.target.name == 'email') {
            let currState = {...newEntity}
            currState.email = e.target.value 
            setNewEntity(currState);
        } else if (e.target.name == 'password') {
            let currState = {...newEntity}
            currState.password = e.target.value 
            setNewEntity(currState);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1> Sign In </h1>
            <h3> New? <Link to="/posts"> Create an account </Link> </h3>
            <h3> Email </h3>
            <input 
                name="email"
                type="text"
                placeholder="email" 
                value={newEntity.email}
                onChange={handleChange}
            />
            <h3> Password </h3>
            <input 
                name="password"
                type="text"
                placeholder="password" 
                value={newEntity.password}
                onChange={handleChange}
            />
            <h5> Forgot password? </h5>
            <button> Sign In </button> 
        </form>
    );
}

export default SignInPage;