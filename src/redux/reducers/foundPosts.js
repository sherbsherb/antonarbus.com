import areTagsInPost from '../../helpers/functions/areTagsInPost';
import areWordsInText from '../../helpers/functions/areWordsInText';
import { _allPosts } from '../../posts/_allPosts';

export default function foundPosts(state = _allPosts, action) {
  const words = action.typedWords
  const tags = action.typedTags

  if (action.type === 'find posts')
    return _allPosts
      .filter(el => areWordsInText(words, el.titleTxt + el.postTxt))
      .filter(el => areTagsInPost(tags, el.tagsArr));
  if (action.type === 'reset posts') return _allPosts;
  return state;
}
