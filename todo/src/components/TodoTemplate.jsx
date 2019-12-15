import React from 'react';
import './todoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div>
      <h1>일정관리</h1>
      {children}
    </div>
  );
};

export default TodoTemplate;
