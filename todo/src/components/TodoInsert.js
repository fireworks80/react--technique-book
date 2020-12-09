import { useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ input, onChangeValue, onInsertValue }) => {
  const onChange = useCallback(
    (e) => {
      onChangeValue(e.target.value);
    },
    [onChangeValue]
  );

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(input);
    onInsertValue(input);
    onChangeValue('');
  });

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
      <input type='text' placeholder='할일 입력' value={input} onChange={onChange} />
      <button type='submit'>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
