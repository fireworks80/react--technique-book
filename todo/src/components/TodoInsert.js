import {useState, useCallback} from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  }, [onInsert, value]);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} placeholder="할일 입력" />
      <button type="submit"><MdAdd /></button>
    </form>
  );
};

export default TodoInsert;