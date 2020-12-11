import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

// export const startLoading = (requestType) => ({ type: START_LOADING, payload: requestType });
// export const finishLoading = (requestType) => ({ type: FINISH_LOADING, payload: requestType });
export const startLoading = createAction(START_LOADING, (requestType) => requestType);
export const finishLoading = createAction(FINISH_LOADING, (requestType) => requestType);

const initialState = {};

// const loading = handleActions(
//   {
//     [START_LOADING]: (state, action) => ({
//       ...state,
//       [action.payload]: true,
//     }),
//     [FINISH_LOADING]: (state, action) => ({
//       ...state,
//       [action.payload]: false,
//     }),
//   },
//   initialState
// );

const loading = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        [action.payload]: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        [action.payload]: false,
      };
    default:
      return state;
  }
};

export default loading;
