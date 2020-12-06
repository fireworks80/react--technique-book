import { useCallback } from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onClick={() => onToggle(todo.id)}
        readOnly
      />
      <span>{todo.text}</span>
      <button type="button" onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onInsert(input);
      onChangeInput('');
    },
    [onChangeInput, onInsert, input],
  );

  const onChange = useCallback(
    (e) => {
      onChangeInput(e.target.value);
    },
    [onChangeInput],
  );

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={input} onChange={onChange} />
        <button>add</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </div>
    </>
  );
};

export default Todos;
