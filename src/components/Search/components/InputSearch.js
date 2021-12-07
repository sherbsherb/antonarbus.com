import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { store } from '../../../App'
import { postsArr } from '../../PostsFeed/postsArr'

export function InputSearch() {
  const dispatch = useDispatch()

  return (
    <DivStyled
      id="input"
      contentEditable={true}
      spellCheck={false}
      placeholder="Search"
      onFocus={e => {
        dispatch({ type: 'show search menu' })
        dispatch({
          type: 'store search input val',
          searchInputVal: e.target.innerText,
        })
        dispatch({ type: 'get words from input' })
        dispatch({ type: 'get tags from input' })
        dispatch({
          type: 'find posts',
          typedWords: store.getState().typedWords,
          typedTags: store.getState().typedTags,
        })
        dispatch({
          type: 'get tags from found posts',
          foundPosts: store.getState().foundPosts,
        })
        dispatch({
          type: 'filter tags',
          tagsInputVal: store.getState().tagsInputVal,
          tagsFromFoundPosts: store.getState().tagsFromFoundPosts,
        })
      }}
      onInput={debounce(e => {
        console.log(0)
        e.target.scrollLeft = 10000

        dispatch({ type: 'show search menu' })
        dispatch({
          type: 'store search input val',
          searchInputVal: e.target.innerText,
        })
        dispatch({ type: 'get words from input' })
        dispatch({ type: 'get tags from input' })
        dispatch({
          type: 'find posts',
          typedWords: store.getState().typedWords,
          typedTags: store.getState().typedTags,
        })
        dispatch({
          type: 'get tags from found posts',
          foundPosts: store.getState().foundPosts,
        })
        dispatch({
          type: 'filter tags',
          tagsInputVal: store.getState().tagsInputVal,
          tagsFromFoundPosts: store.getState().tagsFromFoundPosts,
        })
      })}
      onPaste={e => {
        e.preventDefault()
        console.log('pasted')
        // get text representation of clipboard
        const text = (e.originalEvent || e).clipboardData.getData('text/plain')
        // insert text manually
        document.execCommand('insertHTML', false, text)
      }}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault()
          dispatch({ type: 'show 5 pages' })
          dispatch({ type: 'close search menu' })

          if (store.getState().searchInputVal === '') {
            dispatch({ type: 'remove search input val' })
            dispatch({ type: 'display following posts', postsToShow: postsArr })
            dispatch({ type: 'remove remove found posts msg' })
            dispatch({ type: 'remove tags input val' })
            dispatch({ type: 'reset posts' })
            dispatch({ type: 'get tags from all posts' })
            return
          }
          dispatch({ type: 'show found posts msg' })
          dispatch({ type: 'show remove found posts msg' })
          dispatch({ type: 'display following posts', postsToShow: store.getState().foundPosts })
          dispatch({ type: 'remove tags input val' })
        }

        if (e.key === 'Escape') {
          e.preventDefault()
          dispatch({ type: 'remove search input val' })
          dispatch({ type: 'display following posts', postsToShow: postsArr })
          dispatch({ type: 'close search menu' })
          dispatch({ type: 'remove remove found posts msg' })
          dispatch({ type: 'remove tags input val' })
          dispatch({ type: 'remove search input val' })
          dispatch({ type: 'forget tags from input' })
          dispatch({ type: 'forget words from input' })
          dispatch({ type: 'reset posts' })
          dispatch({ type: 'get tags from all posts' })
          dispatch({ type: 'show 5 pages' })
          document.querySelector('#input').innerHTML = ''
        }
      }}
    />
  )
}

const DivStyled = styled.div`
  flex-grow: 1;
  padding-left: 5px;
  padding-right: 40px;
  font-size: 24px;
  border: 1px solid transparent;
  border-radius: 4px;
  outline-style: none;
  width: auto;
  min-width: 0; /* for shrinking */
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  cursor: text;
  background-color: transparent;
  background-image: linear-gradient(to right bottom, rgb(255 255 255 / 85%), rgb(255 255 255 / 95%));

  &:focus {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(82 168 236/ 80%);
    box-shadow: 0 1px 1px rgb(0 0 0 / 8%), 0px 1px 5px rgb(82 168 236 / 60%) inset;
    margin: 0px;
    outline: 0;
  }

  &[contenteditable]:empty:before {
    content: attr(placeholder);
    content: 'Search';
    color: #bfbfbf;
    font-weight: 200;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

// returns debounced function, not calling it
function debounce(fn, delay = 300) {
  let timeoutId
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(function() {
      fn(...args)
    }, delay)
  }
}
