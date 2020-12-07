import { useEffect, useState } from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    console.log('렌더링이 완료됨');
    console.log(name, nickName);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <form>
      <p>
        <input type='text' value={name} onChange={onChangeName} />
        <input type='text' value={nickName} onChange={onChangeNickName} />
      </p>
      <p>
        <em>{name}</em>
      </p>
      <p>
        <em>{nickName}</em>
      </p>
    </form>
  );
};

export default Info;
