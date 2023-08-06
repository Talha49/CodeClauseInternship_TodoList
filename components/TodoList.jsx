import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <p className='map'>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </p>
  );
};

export default TodoList;
