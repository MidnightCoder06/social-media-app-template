import React from "react"; // w/o importing React this function threw an error!
import '../styles/ErrorText.css';

const ErrorText = (props) => {
    const { errorText } = props;
    return (
        <p className="error-text"> { errorText }</p>
    );
}

export default ErrorText;