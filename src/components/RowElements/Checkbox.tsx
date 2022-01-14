import React, { useState } from 'react';

const Checkbox = (props) => {
    const { todoId, database_lookup_type } = props;

    const [check, setCheck] = useState(true);

    const handleOnChange = () => {
        setCheck(!check)
        // a POST request needs to happen here to update the isCompleted boolean value of the task or subtask in whichever of those two databases
    }

    return (
        <input type="checkbox" checked={check} onChange={handleOnChange}></input>
    );
}

export default Checkbox;