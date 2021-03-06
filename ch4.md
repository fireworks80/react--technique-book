# 리액트를 다루는 기술

## chapter 4 (이벤트 핸들링)
````
# 이벤트 이름은 카멜케이스
- onClick, onKeyPress....

# 이벤트에 함수형태의 값으로 전달

# DOM 요소에만 이벤트 설정 가능 (Component에 이벤트를 설정 하면 해당 이벤트 props를  component에 전달 하는 것 뿐임)
- <MyComponent onClick={doSomething} />
 => <div onClick={this.props.doSomething}> (전달받은 props를 컴포넌트 내부의 DOM이벤트로 설정)

```` 

### input 요소의 값에 state값 설정하기 (input의 value값을 state의 속성값으로 설정)
````
class Comp extends Component {
  state = {
    msg: ''
  };

  ...

  render() {
    return (
      <input value={this.state.msg} />
    )
  }
}
````

### 메서드 

arrow function으로 만들기 (일만 함수로 만들면 this = undefined)
(constructor에서 메서드를 설정한 뒤 일반 함수형태로 작성해도 되지만 추후 수정이 번거로우므로 arrow function을 작성)

````
class EventPractice extends Component {
  // constructor
  // constructor(props) {
  //  super(props);
  //  this.msg = '';
  //  this.handleChange = this.handleChange.bind(this); # .bind(this)의 this는 EventPractice 컴포넌트
  //}

  // handleChange(e) {
  //  ...
  // }

  // ============= 아래와 같이 변경 ============= 

  state = {
    msg: ''
  }

  handleChange = (e) => {
    ...
  }

  ...

}

````

### input 여러개 다루기

e.target.name 사용하기
객체안에서 key를  [ ]로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용됨 

````
className Practice extends Component {

  state = {
    msg: '',
    username: ''
  };

  handleChange = (e) => {
    this.setState({
      // e.target.name = 'username, msg'
      // {
      //  'username' : e.target.value,
      //  'msg' : e.target.value
      // }

      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      // name attribute는 state의 key값으로 사용
      <input name="username" onChange={handleChange} />
      <input name="msg" onChange={handleChange} />
    );
  }

}

````

### 함수형으로 구현
(자세한 사항은 8장에서.....)
````
// useState 사용
import React, { useState } from 'react';

const Practice = () => {

  // 구조 분해 할당
  // const [변수명, 변수에 값 설정할 메서드명]= useState(''); (useState의 매개변수로는 msg에 초기 할당될 값을 넣는다.)
  /*
  const [msg, setMsg] = useState('');
  const [username, setUserName] = useState('');

  // 메서드 대신 function으로 작성
  const handleChangeuserName = (e) => {
    setUserName(e.target.value);    
  };

  const handleChangeMsg = (e) => {
    setMsg(e.target.value);    
  };
  */

  render() {
    return (
      // name attribute는 state의 key값으로 사용
      <input name="username" onChange={handleChangeUserName} />
      <input name="msg" onChange={handleChangeMsg} />
    );
  }
}

// ========= 위의 내용을 리팩토링 ==================

const Practice = () => {

  const [form, setForm] = useState({
    username: '',
    msg: ''
  });

  const handleForm = (e) => {
    setForm({
      ...form, // 기존의 form안의 값을 복사한다
      [e.target.name]: e.target.value // 원하는 키의 값을 덮어 씌운다
    });
  };

  render() {
    return (
      // name attribute는 state의 key값으로 사용
      <input name="username" onChange={handleForm} />
      <input name="msg" onChange={handleForm} />
    );
  }
}
````