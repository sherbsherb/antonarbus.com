import { combineReducers } from 'redux'
import filteredTags from './filteredTags'
import foundPosts from './foundPosts'
import fromToPages from './fromToPages'
import postsOnDisplay from './postsOnDisplay'
import searchInputVal from './searchInputVal'
import showFoundPostsMsg from './showFoundPostsMsg'
import showRemoveFoundPostsMsg from './showRemoveFoundPostsMsg'
import showSearchMenu from './showSearchMenu'
import tagsFromFoundPosts from './tagsFromFoundPosts'
import tagsInputVal from './tagsInputVal'
import typedTags from './typedTags'
import typedWords from './typedWords'

const allReducers = combineReducers({
  showRemoveFoundPostsMsg,
  showFoundPostsMsg,
  showSearchMenu,
  postsOnDisplay,
  tagsFromFoundPosts,
  foundPosts,
  typedWords,
  typedTags,
  searchInputVal,
  tagsInputVal,
  filteredTags,
  fromToPages,
})

export default allReducers
