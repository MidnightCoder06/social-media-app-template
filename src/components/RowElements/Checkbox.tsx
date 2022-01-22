import React, { useState } from 'react';

const Checkbox = (props) => {
    const { todoId, isCompleted, database_lookup_type } = props;
    
    const [check, setCheck] = useState<boolean>(isCompleted);

    const toggleIsCompleted = async (id, isChecked, type) => {
        try {
            const body = { id, isChecked, type };
            const response = await fetch('http://localhost:5000/checkbox', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
        } catch(err) {
            console.error(err);
        }
    }

    const handleOnChange = () => {
        setCheck(!check)
        if (database_lookup_type === 'subtask') {
            // not implemented for 'tasks'
            toggleIsCompleted(todoId, !check, database_lookup_type) 
            // ^ previous error: Cannot set headers after they are sent to the client
            // error coming from nodeJs because you weren't passing these in as arguments 
            // trying to call variables from props inside a function without passing them in as arguments / declaring parameters ddidn't work here
        }
    }

    return (
        <input type="checkbox" checked={check} onChange={handleOnChange}></input>
    );
}

export default Checkbox;