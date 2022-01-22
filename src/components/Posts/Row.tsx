import React, { useState } from 'react';
import EditTodo from './EditTodo';
import Checkbox from '../RowElements/Checkbox';
import DropdownButton from '../RowElements/DropdownButton';
import Subtasks from '../SubPosts/Subtasks';
import '../../styles/Row.css';

const Row = (props) => {
    const { todo, todos, setTodos} = props;

    // todo.isCompleted is not implemented so just mocking the value
    const todoCompletionStatus = true;

    const [dropdownPressed, setDropdownPressed] = useState(false);

    const deleteTodo = async (id) => {
        try {
          const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
          });
          // 'Property does not exist on type 'never' until you added <any[]> to the useState hook
          setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (err) {
          console.error(err)
        }
      }

    return (
        <div className='todo-row'>

            <div className='child'>
                <Checkbox todoId={todo.todo_id} isCompleted={todoCompletionStatus} database_lookup_type={'task'} /> 
            </div>
            
            <div className='child'>
                <div>{todo.description}</div>
                <div><EditTodo todo={todo} /></div>
                <div>
                    <button
                    onClick={() => deleteTodo(todo.todo_id)}>
                    Delete
                    </button>
                </div>
            </div>
            
            <div className='child'>
                <DropdownButton dropdownPressed={dropdownPressed} setDropdownPressed={setDropdownPressed} />
            </div>

            {dropdownPressed ? <Subtasks parentTaskId={todo.todo_id} /> : ''}
            
        </div>
    );
}

export default Row;