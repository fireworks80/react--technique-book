#hooks

- useState
  : 가변적인 상태를 지닐 수 있음. useState(<초깃값으로 어떤 값이든 넣을 수 있다>)를 호출하면 배열이 반환된다.
  배열의 첫번째는 현재 상태, 두번째는 원소 상태를 저장해주는 함수

  ```
  import {useState} from 'react';

  const [name, setName] = useState('');
  ```

- useEffect
  : Vue에서 created, updated와 비슷 한것 같음?
  react의 componentDidMount, componenetDidUpdate를 합친 형태
  callback 함수와, deps(dependencis)의존되는 것들의 두 매개 변수를 받는다.(deps는 생략 가능)

  ```
  import {useState, useEffect} from 'react';

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  // deps는 생략 가능
  // 생략하면 component가 업데이트 될때마다 계속 호출 됨
  useEffect(() => {}, []);

  useEffect(() => {
    console.log('렌더링 됨');
  });

  // 마운트 될때만 실행
  // deps에 빈 배열을 넣어주면 마운트 될때만 실행
  useEffect(() => {}, []);

  // 특정 값이 업데이트 될때만 실행
  // name 값이 업데이트 될때만 실행 된다.
  useEffect(() => {}, [name]);
  ...
  ```

  컴포넌트가 언마운트 되기전 또는 업데이트 되기 직전에 어떤 작업을 수행하고 싶을때 useEffect에서 뒷정리 함수(cleanup)을 반환해 줘야 한다.

  ```
    useEffect(() => {
      return () => {}; // cleanup 함수
    });
  ```

  ```
  // App.js
  // 숨기기 버튼 클릭 했을때 (Info 컴포넌트가 종료되기 전 Info 컴포넌트의 cleanup 함수가 실행된다)

  import { useState } from 'react';
  import Info from './Info';
  function App() {
    const [visible, setVisible] = useState(false);

    const onVisible = () => {
      setVisible(!visible);
    };

    return (
      <>
        <div>
          <button type='button' onClick={onVisible}>
            {visible ? '숨기기' : '보이기'}
          </button>
        </div>
        <div>{visible && <Info />}</div>
      </>
    );
  }

  export default App;


  // Info.js
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

  ```
