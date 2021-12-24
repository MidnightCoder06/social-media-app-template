import React, { useState } from 'react';

const SignInPage = () => {

    const initialFormState = {
        email: '',
        password: ''
    }

    const [newEntity, setNewEntity] = useState(initialFormState);

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('submit');
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
            <h3> New? Create an account </h3>
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