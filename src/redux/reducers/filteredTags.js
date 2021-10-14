import returnAllTagsFromArr from '../../helpers/functions/returnAllTagsFromArr';
import { _allPosts } from '../../posts/_allPosts';

let allTags = returnAllTagsFromArr(_allPosts);

export default function filteredTags(state = allTags, action) {
  //  foundTags to be instead of state & allTags
  if (action.type === 'filter tags') return state.filter(tag => tag.toUpperCase().includes(action.tagsInputVal.toUpperCase()));
  if (action.type === 'reset filter tags') return allTags;
  return allTags;
}
