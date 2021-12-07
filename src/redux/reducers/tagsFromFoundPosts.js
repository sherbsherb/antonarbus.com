import returnAllTagsFromArr from '../../helpers/functions/returnAllTagsFromArr'
// import { postsArr } from '../../posts/postsArr';
import { postsArr } from '../../components/PostsFeed/postsArr'

const allTags = returnAllTagsFromArr(postsArr)

export default function tagsFromFoundPosts(state = allTags, action) {
  const foundPosts = action.foundPosts
  if (action.type === 'get tags from found posts') return returnAllTagsFromArr(foundPosts)
  if (action.type === 'get tags from all posts') return allTags
  return state
}
