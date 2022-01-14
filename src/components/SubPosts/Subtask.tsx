import React from 'react';
import Checkbox from '../RowElements/Checkbox';

const Subtask = (props) => {
    const { subTaskId, title } = props;
    return (
        <div> <Checkbox todoId={subTaskId} database_lookup_type={'subtask'} /> { title } </div>
    );
}

export default Subtask;