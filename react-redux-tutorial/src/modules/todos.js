const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

let id = 3;
export const changeInput = (input) => ({ type: CHANGE_INPUT, payload: input });
export const insert = (text) => ({
  type: INSERT,
  payload: { id: id++, text, done: false },
});
export const toggle = (id) => ({ type: TOGGLE, payload: id });
export const remove = (id) => ({ type: REMOVE, payload: id });

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: 'first Redux',
      done: true,
    },
    {
      id: 2,
      text: 'sec Redux',
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
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
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
        ),
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
