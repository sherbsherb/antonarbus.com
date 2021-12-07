export default function showFoundPostsMsg(state = false, action) {
  if (action.type === 'show found posts msg') return true
  if (action.type === 'remove found posts msg') return false
  return state
}
