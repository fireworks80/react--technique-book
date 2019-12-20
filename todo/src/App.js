import React, { useState, useCallback, useRef } from 'react';

import TodoContainer from './component/TodoContainer';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

const createBulkTodos = () => {
  const array = [];
  for (let i = 0; i < 2500; i += 1) {
    array.push({
      id: i,
      text: `운동하기 ${i}`,
      checked: false
    });
  }
  return array;
};

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);
  const onInsert = useCallback(
    val => {
      const todo = {
        id: nextId.current,
        text: val,
        checked: false
      };

      setTodos(todos => [...todos, todo]);
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  return (
    <div>
      <TodoContainer>
        <TodoInput onInsert={onInsert} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      </TodoContainer>
    </div>
  );
};

export default App;
