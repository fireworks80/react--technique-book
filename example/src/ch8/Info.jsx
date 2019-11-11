import React, { useState } from 'react';

const Info = () => { 
  const [name, setName] = useState('');
  const [nickName, setnickName] = useState('');

  const onChangeName = e => { 
    setName(e.target.value);
  };

  const onChangeNickname = e => { 
    setnickName(e.target.value);
  };
  
  return (
    <div>
      <p>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickName} onChange={onChangeNickname} />
      </p>
      <p>name: {name}</p>
      <p>nickName: {nickName}</p>
    </div>
  );
};

export default Info;