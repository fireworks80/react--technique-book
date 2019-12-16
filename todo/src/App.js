import React, { useState, useCallback } from 'react';
import {
  MdAdd,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';

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
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  let lastNum = 3;
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const todo = {
        id: (lastNum += 1),
        text: value,
        checked: false
      };
      setTodos([...todos, todo]);
    },
    [todos, value]
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
      <h1>일정 관리</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={value} onChange={onChange} />
        <button>
          <MdAdd />
        </button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label className={cn(todo.checked ? 'checked' : '')}>
              <input
                type='checkbox'
                defaultChecked={todo.checked}
                onChange={() => onToggle(todo.id)}
              />
              {todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              {todo.text}
            </label>
            <button onClick={() => onRemove(todo.id)}>
              <MdRemoveCircleOutline />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
