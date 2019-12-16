import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './todoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <li>
      <label className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <input
          type='checkbox'
          defaultChecked={checked}
          onChange={() => onToggle(id)}
        />
        <span>{text}</span>
      </label>
      <button onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
        del
      </button>
    </li>
  );
};

export default TodoListItem;
