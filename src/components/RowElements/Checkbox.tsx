import React, { useState } from 'react';

const Checkbox = (props) => {
    const { todoId, isCompleted, database_lookup_type } = props;

    const [check, setCheck] = useState<boolean>(isCompleted);

    // TODO: check if this works
    const toggleIsCompleted = async (isCompleted) => {
        try {
            const response = await fetch('http://localhost:5000/todos', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ todoId, isCompleted, database_lookup_type })
            });
        } catch(err) {
            console.error(err);
        }
    }

    const handleOnChange = () => {
        setCheck(!check)
        toggleIsCompleted(!check)
    }

    return (
        <input type="checkbox" checked={check} onChange={handleOnChange}></input>
    );
}

export default Checkbox;