import React from 'react'

const DropdownButton = (props) => {

    const { setSubtasks, dropdownPressed, setDropdownPressed } = props;

    const fetchSubTasks = () => {
        setDropdownPressed(!dropdownPressed);
        console.log('fetching sub tasks') 
        /*
        type -> GET
        arg -> taskId
        endpoint name -> subtasks
        output ->
        {
            subtaks: [
                {parentId: string, subTaskId: string, title: string, isCompleted: boolean},
                {...},
                ...
            ]
        }
        */
    }

    return (
        <button onClick={fetchSubTasks}> { dropdownPressed ? 'hide subtaks' : 'view subtasks' } </button>
    );
}

export default DropdownButton;