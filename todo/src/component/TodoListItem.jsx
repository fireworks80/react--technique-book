import React from 'react';
import cn from 'classnames';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';

const TodoListItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, checked } = todo;
  return (
    <li>
      <label className={cn(checked ? 'checked' : '')}>
        <input
          type='checkbox'
          defaultChecked={checked}
          onChange={() => onToggle(id)}
        />
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        {text}
      </label>
      <button onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </button>
    </li>
  );
};

export default React.memo(TodoListItem);
