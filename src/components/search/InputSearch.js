import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { store } from '../..';

export function InputSearch(props) {
  const {
    returnUpdatedState,
    setState,
    state,
    searchBtnClickHandler,
    closeFoundPostsContainer,
  } = props;

  const searchInputValState = useSelector(state => state.searchInputVal);
  const dispatch = useDispatch();

  return (
    <DivStyled
      id="input"
      contentEditable={true}
      placeholder="Search"
      onFocus={e => {
        const updateState = returnUpdatedState(e);
        setState({
          ...state,
          ...updateState,
          //openSearchMenu: true,
        });

        dispatch({
          type: 'show search menu'
        })

      }}
      onInput={debounce(e => {
        const updateState = returnUpdatedState(e);
        setState({
          ...state,
          ...updateState,
          //openSearchMenu: true,
        });

        dispatch({
          type: 'show search menu'
        })

        dispatch({
          type: 'store search input val',
          searchInputVal: e.target.innerText,
        });

        dispatch({
          type: 'store words from input',
        });

        dispatch({
          type: 'store tags from input',
        });

        const typedWords = store.getState().typedWords;
        const typedTags = store.getState().typedTags;

        dispatch({
          type: 'find posts',
          typedWords: typedWords,
          typedTags: typedTags,
        });

        const foundPosts = store.getState().foundPosts;

        dispatch({
          type: 'get tags from found posts',
          typedWords: typedWords,
          foundPosts: foundPosts,
        });

        e.target.scrollLeft = 10000;
      }, 300)}
      onPaste={e => {
        e.preventDefault();
        console.log('pasted');
        // get text representation of clipboard
        const text = (e.originalEvent || e).clipboardData.getData('text/plain');
        // insert text manually
        document.execCommand('insertHTML', false, text);
      }}

      onKeyDown={e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          searchBtnClickHandler(e);

          dispatch({
            type: 'display found posts',
            foundPosts: store.getState().foundPosts,
          });

          return;
        }

        if (e.key === 'Escape') {
          e.preventDefault();
          closeFoundPostsContainer();

          dispatch({
            type: 'display all posts'
          });

          return;
        }
      }}
    />
  );
}

const DivStyled = styled.div`
  flex-grow: 1;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 40px;
  font-size: 24px;
  line-height: 24px;
  border-width: 2px;
  border-color: #c0c0c0;
  border-style: solid;
  border-radius: 4px;
  outline-style: none;
  width: auto;
  min-width: 0; /* for shrinking */
  background-color: white;
  color: black;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  cursor: text;

  &:hover {
    border-color: grey;
    transition: border-color 200ms ease;
  }

  &:focus {
    border-color: rgba(0, 157, 214, 1);
    margin: 0px;
  }

  &[contenteditable]:empty:before {
    content: attr(placeholder);
    color: #bfbfbf;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

function debounce(callback, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(this, args);
    }, wait);
  };
}
