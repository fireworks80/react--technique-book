import cn from 'classnames';
import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import './TodoListItem.scss';


const TodoListItem = ({todo}) => {
  const { text, checked } = todo;

  return (
    <li className="TodoListItem">
      {/* <label className="checkbox"> */}
      <label className={cn('checkbox', {checked})}>
        <input type="checkbox" />
        {checked ? <MdCheckBox /> :<MdCheckBoxOutlineBlank />}
        <span className="text">{text}</span>
      </label>
      <button type="button" className="remove">
        <MdRemoveCircleOutline />
      </button>
    </li>
  );
};

export default TodoListItem;