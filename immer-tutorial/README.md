#immer

## 불변성
react는 값을 직접 수정 하지 않고, 새로운 배열을 만들고 새로운 객체를 만들어서 필요한 부분을 교체해주는 방식으로 구현한다.
업데이트가 필요한 곳은 아예 새로운 배열 또는 새로운 객체를 만든다. 그래서 props가 바뀌었는지 바뀌지 않았는지 알아내서 리랜더링을 해준다.
이렇게 기존 값을 직접 수정하지 않으면서 새로운 값을 만들어 내는 것을 '불변성을 지킨다'고 한다.

```
const obj = {
  somewhere: {
    deep: {
      inside: 3,
      arr: [1, 2]
    },
    bar: 2
  },
  foo: 1
};
```
일 경우 somewhere.deep.inside값을 4로 바꾸려면

```
const otherObj = {
  ...obj,
  somewhere: {
    ...obj.somewhere,
    deep: {
      ...obj.somewhere.deep
      inside: 4
    }
  }
};
```

somewhere.deep.arr에 4를 추가 하려면
````
const anOtherObj = {
  ...obj,
  somewhere: {
    ...obj.somewhere,
    deep: {
      ...obj.somewhere.deep,
      arr: obj.somewhere.deep.arr.concat(4)
    }
  }
};
````
처럼 복잡하게 코드를 작성해야 한다.
이를 쉽게 구현하기 위한 것이 immer 이다.

**** immer를 사용하면 배열에 직접적 변화를 일으키는 push, splice등의 함수를 사용 해도 무방 ****

### useState의 함수형 업데이트 immer와 같이 쓰기
```
...

const onRemove = useCallback(id => {
  // setData(produce(data, draft => {
  //  draft.user.splice(draft.user.findIndex(info => info.id === id), 1);
  // }));


  // produce 함수 호출시 첫 파라미터가 함수 형태라면 업데이트 함수를 반환 한다.
  setData(draft => {
    draft.user.splice(draft.user.findIndex(info => info.id === id), 1);
  });
}, []);
````

### 알게된 것 ‼️

- 여러 입력 제어
여러 input 엘리먼트를 제어 할때 각 엘리먼트에 name attr을 추가하고 event.target.name 값을 통해 핸들러가 어떤 작업을 할지 선택

````
import React, {useState} from 'react';

function App() {
  const [form, setForm] = useState({username: '', name: ''});
  const onSubmit = e => {
    const {name, value} = e.target;

    setForm({
      ...form,
      [name]: value // computed property name 구문을 사용하면 해당 input name 속성에 일치하는 state를 업데이트 한다.
                    // name key를 가진 값을 value로 설정
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="username" />
      <input type="text" name="name" />
      <button>등록</button>
    </form>
  );
}
````

🔗
- [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/basic/09-multiple-inputs.html)
- [객체 초기자 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer#%EC%86%8D%EC%84%B1_%EA%B3%84%EC%82%B0%EB%AA%85)
- [속성 접근자 - MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)