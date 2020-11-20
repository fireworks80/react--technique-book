import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input type="text" placeholder="할일 입력" />
      <button type="submit"><MdAdd /></button>
    </form>
  );
};

export default TodoInsert;