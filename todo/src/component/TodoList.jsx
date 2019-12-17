import React, { useState } from 'react';
import TodolistItem from './TodoListItem';

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodolistItem
          todo={todo}
          onRemove={onRemove}
          onToggle={onToggle}
          key={todo.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
