import React from 'react';
import cn from 'classnames';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import './TodoListItem.scss';


const TodoListItem = ({todo, onRemove, onToggle}) => {
  const { id, text, checked } = todo;
  return (
    <li className="TodoListItem">
      {/* <label className="checkbox"> */}
      <label className={cn('checkbox', checked)}>
        <input type="checkbox" checked={checked} onChange={ () => onToggle(id)} />
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <span className="text">{text}</span>
      </label>
      <button type="button" className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </button>
    </li>
  );
};

export default React.memo(TodoListItem);