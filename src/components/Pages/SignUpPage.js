import React from 'react';

const SignUpPage = () => {
    return (
        <form>
            <h3> First Name* </h3>
            <input placeholder="first name" />
            <h3> Last Name* </h3>
            <input placeholder="last name" />
            <h3> Email* </h3>
            <input placeholder="enter your email" />
            <h3> Phone Number* </h3>
            <input placeholder="enter your phone number" />
            <h3> Password* </h3>
            <input placeholder="choose a passwored" />
            <button> Create Account </button>
        </form>
    );
}

export default SignUpPage;