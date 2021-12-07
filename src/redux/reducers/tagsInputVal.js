export default function tagsInputVal(state = '', action) {
  if (action.type === 'store tags input val') return action.tagsInputVal
  if (action.type === 'remove tags input val') return ''
  return state
}
