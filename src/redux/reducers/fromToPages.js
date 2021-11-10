export default function fromToPages(state = { from: 1, to: 5 }, action) {
  const maxNumOfPosts = action.maxNumOfPosts || 15
  if (action.type === 'show 5 pages') return { from: 1, to: Math.min(5, maxNumOfPosts) };
  if (action.type === 'show more pages') return { ...state, to: Math.min(state.to + 5, maxNumOfPosts) };
  return state;
}
