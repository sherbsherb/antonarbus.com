export default function showFoundPostsMsg(state = false, action) {
  //  foundTags to be instead of state & allTags
  if (action.type === 'show found posts msg') return true;
  if (action.type === 'remove found posts msg') return false;
  return state;
}
