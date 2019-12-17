import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

const TodoInput = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      onInsert(value);
      setValue('');
    },
    [onInsert, value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={value} onChange={onChange} />
      <button>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInput;
