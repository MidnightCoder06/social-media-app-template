// map over all the subtasks and put them in the subtask component 
// if no subtasks then display a progress circle 

import React from 'react';
import '../../styles/Subtasks.css';

const Subtasks = (props) => {
    const { subtasks } = props;
    return (
        <div className='subtasks-container'>
            <div> subtask </div>
            <div> subtask </div>
            <div> subtask </div>
            <div> subtask </div>
            <div> subtask </div>
            <div> subtask </div>
        </div>
    );
}

export default Subtasks;