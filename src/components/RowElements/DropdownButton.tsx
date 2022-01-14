import React from 'react'

const DropdownButton = (props) => {

    const { dropdownPressed, setDropdownPressed } = props;

    const fetchSubTasks = () => {
        setDropdownPressed(!dropdownPressed);
    }

    return (
        <button onClick={fetchSubTasks}> { dropdownPressed ? 'hide subtaks' : 'view subtasks' } </button>
    );
}

export default DropdownButton;