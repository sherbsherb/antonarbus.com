import areTagsInPost from '../../helpers/functions/areTagsInPost';
import areWordsInText from '../../helpers/functions/areWordsInText';
// import { postsArr } from '../../posts/postsArr';
import { postsArr } from '../../components/PostsFeed/postsArr'

export default function foundPosts(state = postsArr, action) {
  const words = action.typedWords
  const tags = action.typedTags

  if (action.type === 'find posts')
    return postsArr
      .filter(el => areWordsInText(words, el.titleTxt + el.postTxt))
      .filter(el => areTagsInPost(tags, el.tagsArr));
  if (action.type === 'reset posts') return postsArr;
  return state;
}
