import returnAllTagsFromArr from '../../helpers/functions/returnAllTagsFromArr';
// import { _allPosts } from '../../posts/_allPosts';
import { _allPosts } from '../../components/PostsFeed/posts/_allPosts'

let allTags = returnAllTagsFromArr(_allPosts);

export default function tagsFromFoundPosts(state = allTags, action) {
  const foundPosts = action.foundPosts
  if (action.type === 'get tags from found posts') return returnAllTagsFromArr(foundPosts);
  if (action.type === 'get tags from all posts') return allTags;
  return state;
}
