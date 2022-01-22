import React from 'react';
import Checkbox from '../RowElements/Checkbox';

const Subtask = (props) => {
    const { subTaskId, isCompleted, title } = props;
    return (
        <div> <Checkbox key={subTaskId} todoId={subTaskId} isCompleted={isCompleted} database_lookup_type={'subtask'}  /> { title } </div>
    );
}

export default Subtask;