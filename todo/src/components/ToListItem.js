import {MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline} from 'react-icons/md';
import './TodoListItem.scss';


const TodoListItem = () => {
  return (
    <li className="TodoListItem">
      <label className="checkbox">
        <input type="checkbox" />
        <MdCheckBoxOutlineBlank />
        <span className="text">할 일</span>
      </label>
      <button type="button" className="remove">
        <MdRemoveCircleOutline />
      </button>
    </li>
  );
};

export default TodoListItem;