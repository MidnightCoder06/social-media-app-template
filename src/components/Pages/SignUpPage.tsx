import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Auth.css';

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
}

const SignUpPage = (props) => {

    const { setToken } = props;

    const [signedUpEntity, setSignedUpEntity] = useState(initialFormState);
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        if (e.target.name == 'firstName') {
            let currState = {...signedUpEntity}
            currState.firstName = e.target.value
            setSignedUpEntity(currState)
        }
        else if (e.target.name == 'lastName') {
            let currState = {...signedUpEntity}
            currState.lastName = e.target.value
            setSignedUpEntity(currState)
        }
        else if (e.target.name == 'email') {
            let currState = {...signedUpEntity}
            currState.email = e.target.value
            setSignedUpEntity(currState)
        }
        else if (e.target.name == 'phoneNumber') {
            let currState = {...signedUpEntity}
            currState.phoneNumber = e.target.value
            setSignedUpEntity(currState)
        }
        else if (e.target.name == 'password') {
            let currState = {...signedUpEntity}
            currState.password = e.target.value
            setSignedUpEntity(currState)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('from frontend', signedUpEntity);
        try {
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify(signedUpEntity)
            });
            navigate('/posts')
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3> First Name* </h3>
            <input 
                name="firstName"
                type="text"
                placeholder="first name" 
                onChange={handleChange}
                value={signedUpEntity.firstName}
            />
            <h3> Last Name* </h3>
            <input 
                name="lastName"
                type="text"
                placeholder="last name" 
                onChange={handleChange}
                value={signedUpEntity.lastName}
            />
            <h3> Email* </h3>
            <input 
                name="email"
                type="text"
                placeholder="email" 
                onChange={handleChange}
                value={signedUpEntity.email}
            />
            <h3> Phone Number* </h3>
            <input 
                name="phoneNumber"
                type="text"
                placeholder="000-000-0000" 
                onChange={handleChange}
                value={signedUpEntity.phoneNumber}
            />
            <h3> Password* </h3>
            <input 
                name="password"
                type="text"
                placeholder="password" 
                onChange={handleChange}
                value={signedUpEntity.password}
            />
            <div className="create-account">
                <button> Create Account </button>
            </div>
        </form>
    );
}

export default SignUpPage;