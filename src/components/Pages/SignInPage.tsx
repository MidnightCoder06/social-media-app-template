import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ErrorText from '../ErrorText';

// todo: implement some error handling 

interface IUser {
    email: string,
    password: string
}

async function signinUser(credentials) {
    return fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const SignInPage = () => {

    const initialFormState = {
        email: '',
        password: ''
    }

    const [newEntity, setNewEntity] = useState<IUser>(initialFormState);
    const [errorExists, setErrorsExists] = useState<boolean>(false);
    const navigate = useNavigate();

    /*
    JSON.stringify

    Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    @param value — A JavaScript value, usually an object or array, to be converted.
    */

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('submit');
        try {
            const user = await signinUser(newEntity)
            if (user === 'this is not a registered entity') {
                setErrorsExists(true)
            } else {
                navigate('/posts')
            }
        } catch(err) {
            console.error(err)
        } 
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
        <div className="form-wrapper">
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
            { errorExists ? <ErrorText errorText={'the email or password you have entered is incorrect'} /> : ''}
        </div>
    );
}

export default SignInPage;