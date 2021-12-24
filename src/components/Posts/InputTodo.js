import React, { useState } from 'react';

const InputTodo = () => {

  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    setDescription(e.target.value)
  }

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description }
      // by default fetch does a GET request
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(body)
      });

      
      // refresh so we can see the changes being done
      //window.location = '/';

    } catch(err) {
      console.error(err.message)
    }
  }

  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;