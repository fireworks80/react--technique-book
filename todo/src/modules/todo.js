const CHANGE_VALUE = 'todo/CHANGE_VALUE';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

let id = 4;

export const changeValue = (text) => ({ type: CHANGE_VALUE, payload: text });
export const insert = (text) => ({ type: INSERT, payload: { id: id++, text, checked: false } });
export const toggle = (id) => ({ type: TOGGLE, payload: id });
export const remove = (id) => ({ type: REMOVE, payload: id });

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리액트 기초를 알아보자',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링을 해 보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        input: action.payload,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.id ? { ...todo, checked: !todo.checked } : todo)),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

export default todos;
