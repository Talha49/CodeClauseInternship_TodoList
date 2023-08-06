import React, { useState } from 'react';
import TodoList from '../components/TodoList';

const IndexPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: Date.now(),
        title: newTodo.trim(),
      };

      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='box'>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button  className= "btn"onClick={handleAddTodo}>Add</button>
      <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default IndexPage;
