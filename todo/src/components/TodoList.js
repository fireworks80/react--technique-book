import React, {useCallback} from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './ToListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {

  const rowRenderer = useCallback(({ index, key, style }) => { 
    const todo = todos[index];
    return (
      <TodoListItem todo={todo} onRemove={onRemove} key={key} onToggle={onToggle} style={style} />
    );
  }, [onRemove, onToggle, todos]);
  
  return (
    <List className="TodoList" width={512} height={513} rowCount={todos.length} rowHeight={57} rowRenderer={rowRenderer} list={todos} style={{outline: 'none'}} />
    // <ul className="TodoList">
    //   {
    //     todos.map(todo => <TodoListItem todo={todo} onRemove={onRemove} key={todo.id} onToggle={onToggle} />)
    //   }
    // </ul>
  );
};

export default React.memo(TodoList);