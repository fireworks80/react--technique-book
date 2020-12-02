# Redux
리액트 상태 관리 라이브러리
컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜 효율적으로 관리한다.
전역 상태를 관리할 때 굉장히 효과적이다.

## 액션
상태에 어떠한 변화가 필요하면 action이란 것이 발생한다. 객체로 표현 된다.

````
{
  type: 'TOGGLE_VALUE'
}
````
type 필드를 반드시 가지고 있어야 한다.(액션의 이름)
그 외의 값들은 나중에 상태 업데이트를 할 때 참고해야 할 값이며 작성자 마음대로 넣을 수 있다.

````
{
  type: 'ADD_TODO',
  data: {
    id: 1,
    text: '리덕스 배우기'
  }
}

{
  type: 'CHANGE_INPUT',
  text: '안녕하세요'
}
````

### 액션 생성 함수
액션 객체를 만들어 주는 함수.
````
function addTodo(data) {
  return {
    type: 'ADD_TODO',
    data
  }
}

// arrow function
const changeInput = text => ({
  type: 'CHANGE-INPUT',
  text
});

````
어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 매번 액션 객체를 직접 작성하기 번거롭기도 하고 만드는 과정에서 실수로 정보를 노칠 수도 있기 때문에 이를 함수로 만들어서 관리한다.

## 리듀서
변화를 일으키는 함수. 액션을 만들어서 발생시키려면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 온다. 그리고 두 값을 참고해 새로운 상태를 만들어 반환
````
const initState = {
  counter: 1
};

function reducer(state = initState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    default:
      return state;  
  }
}
````

## 스토어
프로젝트에 리덕스를 적용하기 위해 스토어를 만듦, 한개의 프로젝트는 단 하나의 스토어만 가질 수 있음.
스토어 안에는 현재 애플리케이션의 상태와 리듀서가 들어가 있음

## 디스패치
스토어 내장함수 중 하나임. '액션을 발생시키는 것' dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출
이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜 새로운 상태를 만들어 준다.

## 구독(subscribe)
스토어 내장함수 중 하나. subscribe 함수 안에 리스터 함수를 파라미터로 넣고 호출하면 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때마다 호출 됨
````
const listener = () => {
  console.log('상태 업데이트 됨');
};

const unsubscribe = store.subscribe(listener);

unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출
````