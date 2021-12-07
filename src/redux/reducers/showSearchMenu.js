export default function showSearchMenu(state = false, action) {
  if (action.type === 'show search menu') return true
  if (action.type === 'close search menu') return false
  return state
}
