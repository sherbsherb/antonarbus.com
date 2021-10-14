export default function showRemoveFoundPostsMsg(state = false, action) {
  if (action.type === 'show remove found posts msg') return true;
  if (action.type === 'remove remove found posts msg') return false;
  return state;
}
