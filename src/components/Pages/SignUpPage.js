import React from 'react';
import '../../styles/Auth.css';

// TODO: have the submit function actually get an endpoint and do a post in the database
const SignUpPage = () => {
    return (
        <form>
            <h3> First Name* </h3>
            <input placeholder="first name" />
            <h3> Last Name* </h3>
            <input placeholder="last name" />
            <h3> Email* </h3>
            <input placeholder="email" />
            <h3> Phone Number* </h3>
            <input placeholder="phone number" />
            <h3> Password* </h3>
            <input placeholder="password" />
            <div className="create-account">
                <button> Create Account </button>
            </div>
        </form>
    );
}

export default SignUpPage;