// if no subtasks then display a progress circle 

import React, { useState } from 'react';
import Subtask from './Subtask';
import '../../styles/Subtasks.css';

const Subtasks = () => {
    const [subtasks, setSubtasks] = useState([ {id: 4, title: 'Subtask 1'}, {id: 4, title: 'Subtask 2'}, {id: 4, title: 'Subtask 3'}, {id: 4, title: 'Subtask 4'} ]);
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

    return (
        <div className='subtasks-container'>
            {subtasks.map(subtask => (
                <Subtask key={subtask.id} subTaskId={subtask.id} title={subtask.title} />
            ))}
        </div>
    );
}

export default Subtasks;