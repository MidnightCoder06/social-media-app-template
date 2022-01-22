import React, { useState } from 'react';

const EditTodo = ({todo}) => {

  const [description, setDesciption] = useState(todo.description);

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      // refresh so we can see the changes being done
      window.location.href = '/posts';
    } catch (err) {
      console.error(err)
    }
  }

  return (
      <div>
        <div>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={e => setDesciption(e.target.value)} />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-warning"
            data-dismiss="modal"
            onClick = {e => updateDescription(e)}
            >
              Submit Edit
          </button>
        </div>
      </div>
  );
}

export default EditTodo;