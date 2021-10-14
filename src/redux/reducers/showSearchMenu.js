export default function showSearchMenu(state = false, action) {
  //  foundTags to be instead of state & allTags
  if (action.type === 'show search menu') return true;
  if (action.type === 'close search menu') return false;
  return state;
}
