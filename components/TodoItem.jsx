import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (updatedTitle.trim() !== '') {
      // Update the todo item with the new title
      const updatedTodo = { ...todo, title: updatedTitle };
      // Save the updated todo item
      // (You can implement a function to handle saving to a backend or storage)
      console.log('Updated todo:', updatedTodo);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    // Reset the updated title and cancel editing
    setUpdatedTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div className='btns'>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div className='secbtns'>
          <span>{todo.title}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
