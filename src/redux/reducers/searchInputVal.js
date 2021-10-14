export default function searchInputVal(state = '', action) {
  if (action.type === 'store search input val') return action.searchInputVal;
  return state;
}
