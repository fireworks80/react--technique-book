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