import React, { useState, useCallback, useRef } from 'react';

import TodoContainer from './component/TodoContainer';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '운동하기',
      checked: true
    },
    {
      id: 2,
      text: '공부하기',
      checked: true
    },
    {
      id: 3,
      text: '다이어리 적기',
      checked: false
    }
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    val => {
      const todo = {
        id: nextId.current,
        text: val,
        checked: false
      };

      setTodos([...todos, todo]);
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
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
