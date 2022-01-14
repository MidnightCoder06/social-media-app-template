// if no subtasks then display a progress circle 

import React from 'react';
import Subtask from './Subtask';
import '../../styles/Subtasks.css';

const Subtasks = (props) => {
    const { subtasks } = props;
    return (
        <div className='subtasks-container'>
            {subtasks.map(subtask => (
                <Subtask key={subtask.id} subTaskId={subtask.id} title={subtask.title} />
            ))}
        </div>
    );
}

export default Subtasks;