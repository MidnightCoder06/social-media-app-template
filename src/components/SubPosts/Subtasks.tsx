import React, { useState, useEffect } from 'react';
import Subtask from './Subtask';
import '../../styles/Subtasks.css';

const Subtasks = (props) => {
    const { parentTaskId } = props;

    const mockParentId = '1';

    const [subtasks, setSubtasks] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState(false);

    const getSubTasks = async () => {
        try {
            setIsLoading(true);
            setErrors(false);
            // all subtasks
            const response = await fetch('http://localhost:5000/subtasks');
            // specific subtak
            //const response = await fetch(`http://localhost:5000/subtasks/${mockParentId}`);
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

    return (
        <div className='subtasks-container'>
            {subtasks.map(subtask => (
                <Subtask key={subtask.subtask_id} subTaskId={subtask.subtask_id} isCompleted={subtask.is_completed} title={subtask.title} />
            ))}
        </div>
    );
}

export default Subtasks;