import TodoListItem from './ToListItem';
import './TodoList.scss';

const TodoList = () => {
  return (
    <ul className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ul>
  );
};

export default TodoList;