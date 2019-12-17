import React from 'react';

const TodoContainer = ({ children }) => {
  return (
    <div>
      <h1>일정 관리</h1>
      {children}
    </div>
  );
};

export default TodoContainer;
