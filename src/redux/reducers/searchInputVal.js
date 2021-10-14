export default function searchInputVal(state = '', action) {
  if (action.type === 'store search input val') return action.searchInputVal;
  if (action.type === 'remove search input val') return '';
  return state;
}
