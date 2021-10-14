import { _allPosts } from '../../posts/_allPosts';

export default function postsOnDisplay(state = _allPosts, action) {
  const foundPosts = action.foundPosts;

  if (action.type === 'display found posts') return foundPosts;
  if (action.type === 'display all posts') return _allPosts;
  return state;
}
