// TODO: if no subtasks then display a progress circle 

import React, { useState, useEffect } from 'react';
import Subtask from './Subtask';
import '../../styles/Subtasks.css';

const Subtasks = (props) => {
    const { parentTaskId } = props;

    const [subtasks, setSubtasks] = useState([ {parentId: 4, subTaskId:45, title: 'Subtask 1', isCompleted: true}, {parentId: 1, subTaskId:5, title: 'Subtask 2', isCompleted: false} ]);
    //const [subtasks, setSubtasks] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(false);

    const getSubTasks = async () => {
        try {
            setIsLoading(true);
            setErrors(false);
            const response = await fetch(`http://localhost:5000/subtasks/${parentTaskId}`);
            const jsonData = await response.json();
            setSubtasks(jsonData);
        } catch(err) {
            console.error(err);
            setErrors(true);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getSubTasks();
    },[]);

        /*
        type -> GET
        arg -> taskId
        endpoint name -> subtasks
        output ->
        {
            subtaks: [
                {parentId: number, subTaskId: number, title: string, isCompleted: boolean},
                {...},
                ...
            ]
        }
        */

    return (
        <div className='subtasks-container'>
            {subtasks.map(subtask => (
                <Subtask key={subtask.subTaskId} subTaskId={subtask.subTaskId} isCompleted={subtask.isCompleted} title={subtask.title} />
            ))}
        </div>
    );
}

export default Subtasks;