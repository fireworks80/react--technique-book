import React, { Compoent } from 'react';

const Iteration = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameLists = names.map((name, idx) => <li key={name + idx}>{name}</li>);

  return <ul>{nameLists}</ul>;
};

export default Iteration;
