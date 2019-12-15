import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import cn from 'classnames';
import './todoListItem.scss';

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <li>
      <label className={cn('checkbox', { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <input type='checkbox' defaultChecked={checked} />
        <span>{text}</span>
      </label>
      <button>
        <MdRemoveCircleOutline />
        del
      </button>
    </li>
  );
};

export default TodoListItem;
