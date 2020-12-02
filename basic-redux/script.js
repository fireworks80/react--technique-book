import { createStore } from 'redux.js';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('.counter');
const btnIncrease = document.querySelector('.increase');
const btnDecrease = document.querySelector('.decrease');

const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 함수
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () =>({type: DECREASE});

// 초깃값 설정
const initState = {
  toggle: false,
  counter: 0
};

// reducer 함수 정의
function reducer(state = initState, action) {
  switch(action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const render = () => {
  const state = store.getState(); 

  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.addEventListener('click', () => store.dispatch(toggleSwitch()));
btnIncrease.addEventListener('click', () => store.dispatch(increase(1)));
btnDecrease.addEventListener('click', () => store.dispatch(decrease(1)));