import TodoListItem from './ToListItem';
import './TodoList.scss';

const TodoList = ({todos}) => {
  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;