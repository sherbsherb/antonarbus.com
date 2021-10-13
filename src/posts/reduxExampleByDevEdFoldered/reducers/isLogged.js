// isLogged.js

const isLoggedReducer = (state = false, action) => {
  if (action.type === 'SIGN_IN') return !state;
  return state;
};

export default isLoggedReducer;
