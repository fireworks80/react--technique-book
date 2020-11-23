import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';



function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초를 알아보자',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링을 해 보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    }
  ]);

  const nextID = useRef(4);

  const onInsert = useCallback(text => { 
    const todo = {
      id: nextID.current,
      text,
      checked: false
    };

    setTodos(todos => todos.concat(todo));
  }, []);

  const onRemove = useCallback(id => { 
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const onToggle = useCallback(id => { 
    setTodos(todos => todos.map(todo => (
      todo.id === id ? {...todo, checked: !todo.checked} : todo
    )));
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
