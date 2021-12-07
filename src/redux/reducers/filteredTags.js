import returnAllTagsFromArr from '../../helpers/functions/returnAllTagsFromArr'
import { postsArr } from '../../components/PostsFeed/postsArr'

const allTags = returnAllTagsFromArr(postsArr)

export default function filteredTags(state = allTags, action) {
  const tagsInputVal = action.tagsInputVal
  const tagsFromFoundPosts = action.tagsFromFoundPosts

  if (action.type === 'filter tags') {
    return tagsFromFoundPosts.filter(tag =>
      tag.toUpperCase().includes(tagsInputVal.toUpperCase())
    )
  }

  return state
}
