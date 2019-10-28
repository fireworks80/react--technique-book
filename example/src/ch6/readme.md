# 후기

input은 InputComponent.jsx
list는 WordList.jsx로 분리

## 부족한점
InputComponent.jsx으로 컴포넌트 분리 했을때 ref의 사용법이 제대로 숙지 되어 있지 않아
input 요소에 이벤트, data 값을 부모에게 넘겨 주는 방법을 찾느라 많은 오류가 생김

부모 컴포넌트에서 이벤트, data설정을 하고 input 컴포넌트에 props로 전달 하면 된다.