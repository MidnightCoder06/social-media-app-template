import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Auth.css';
import ErrorText from '../ErrorText';

interface IForm {
    firstName: string, 
    lastName: string,
    email: string,
    phoneNumber: string,
    password: string
}

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: ''
}

// TODO: add 401 Unathorized if no token
// TODO: add 403 Forbidden if the token is not correct
async function loginUser(credentials) {
    return fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

const SignUpPage = (props) => {

    const { setToken } = props;

    const [signedUpEntity, setSignedUpEntity] = useState<IForm>(initialFormState);
    const [error, setError] = useState<string>('');
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
        if(signedUpEntity.password.length < 8) {
            setError('your password must be at least 8 characters')
        } else if(!signedUpEntity.email.includes('@')) {
            setError('please enter a valid email address')
        } else {
            try {
                const response = await loginUser(signedUpEntity)
                console.log('response', response) // token     {token: 'test123'} or {message: 'duplicate email'}
                if (response.token) {
                    setToken(response)
                    navigate('/posts')
                } else if (response.message) {
                    setError('an account with this email is already registered. If you own this account please login. Other use a different email address.')
                }
            } catch(err) {
                console.error(err)
            }
        }
    }

    return (
        <div className="form-wrapper">
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
            { error ? <ErrorText errorText={error} /> : ''}
        </div>
    );
}

export default SignUpPage;