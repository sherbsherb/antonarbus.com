import { _allPosts } from '../../posts/_allPosts';

export default function postsOnDisplay(state = [], action) {
  const foundPosts = action.postsToShow;
  if (action.type === 'display following posts') return foundPosts;
  return state;
}
