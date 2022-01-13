import React from 'react'

const DropdownButton = (props) => {

    const { setSubtasks } = props;

    const fetchSubTasks = () => {
        console.log('fetching sub tasks')
    }

    return (
        <button onClick={fetchSubTasks}> view subtasks </button>
    );
}

export default DropdownButton;