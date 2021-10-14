import returnAllTagsFromArr from '../../helpers/functions/returnAllTagsFromArr';
import { _allPosts } from '../../posts/_allPosts';

let allTags = returnAllTagsFromArr(_allPosts);

export default function filteredTags(state = allTags, action) {
  const tagsInputVal = action.tagsInputVal;
  const foundPosts = action.foundPosts;

  //  foundTags to be instead of state & allTags
  if (action.type === 'filter tags')
    return returnAllTagsFromArr(foundPosts).filter(tag =>
      tag.toUpperCase().includes(tagsInputVal.toUpperCase())
    );
  if (action.type === 'reset filter tags')
    return returnAllTagsFromArr(foundPosts);
  return allTags;
}
