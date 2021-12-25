import React from 'react';
import './SignUpBtn.css';
import { useNavigate } from 'react-router-dom';

const SignUpBtn = () => {
    const navigate = useNavigate();

    const signUp = () => {
        navigate('/sign-up')
    }

    return (
        <button className="sign-up-btn" onClick={() => signUp()}> Sign Up </button>
    );
}

export default SignUpBtn;