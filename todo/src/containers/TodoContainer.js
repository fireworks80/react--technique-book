import { connect } from 'react-redux';
import TodoInsert from '../components/TodoInsert';
import TodoList from '../components/TodoList';
import { changeValue, insert, toggle, remove } from '../modules/todo';

const TodoContainer = ({ input, todos, insert, changeValue, toggle, remove }) => {
  return (
    <>
      <TodoInsert input={input} onInsertValue={insert} onChangeValue={changeValue} />
      <TodoList todos={todos} onRemove={remove} onToggle={toggle} />
    </>
  );
};

const mapStateToProps = ({ todo }) => ({
  input: todo.input,
  todos: todo.todos,
});

const mapDispatchToProps = {
  changeValue,
  insert,
  toggle,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
