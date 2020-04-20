// initialState

const initialState = {
  count: 0,
};

// action
export const ADD = "ADD";

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

// dispatch
export const addCount = (count = 1) => {
  return {
    type: ADD,
    payload: count,
  };
};

export default reducer;
