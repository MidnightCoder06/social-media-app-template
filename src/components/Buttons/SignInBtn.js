import React from 'react';
import './SignInBtn.css';
// import { useHistory } from 'react-router-dom'; 
// In react-router-dom v6 useHistory() is replaced by useNavigate()
import { useNavigate } from 'react-router-dom';


const SignInBtn = () => {
    // const history = useHistory();
    const navigate = useNavigate();

    const signIn = () => {
        //history.push('/sign-up')
        navigate('/sign-in')
    }

    return (
        <button className="sign-in-btn" onClick={() => signIn()}> Sign In </button>
    );
}

export default SignInBtn;