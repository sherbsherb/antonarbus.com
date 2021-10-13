// \reducers\counter.js

const counterReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT') return state + action.payload;
  if (action.type === 'DECREMENT') return state - action.payload;
  return state;
};

export default counterReducer;
