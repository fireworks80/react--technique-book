const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>예제 텍스트</span>
        <button type="button">삭제</button>
      </label>
    </li>
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
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button>등록</button>
      </form>
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </>
  );
};

export default Todos;
