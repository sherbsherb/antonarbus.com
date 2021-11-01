import returnAllTagsFromArr from '../../helpers/functions/returnAllTagsFromArr';
import { _allPosts } from '../../posts/_allPosts';

let allTags = returnAllTagsFromArr(_allPosts);

export default function filteredTags(state = allTags, action) {
  const tagsInputVal = action.tagsInputVal;
  const tagsFromFoundPosts = action.tagsFromFoundPosts;

  if (action.type === 'filter tags')
    return tagsFromFoundPosts.filter(tag =>
      tag.toUpperCase().includes(tagsInputVal.toUpperCase())
    );
  
  return state;
}
