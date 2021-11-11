import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { store } from '../../../App';
import { _allPosts } from '../../../posts/_allPosts';

export function InputSearch() {
  const dispatch = useDispatch();

  return (
    <DivStyled
      id="input"
      contentEditable={true}
      spellCheck={false}
      placeholder="Search"
      onFocus={e => {
        dispatch({ type: 'show search menu' });
        dispatch({
          type: 'store search input val',
          searchInputVal: e.target.innerText,
        });
        dispatch({ type: 'get words from input' });
        dispatch({ type: 'get tags from input' });
        dispatch({
          type: 'find posts',
          typedWords: store.getState().typedWords,
          typedTags: store.getState().typedTags,
        });
        dispatch({
          type: 'get tags from found posts',
          foundPosts: store.getState().foundPosts,
        });
        dispatch({
          type: 'filter tags',
          tagsInputVal: store.getState().tagsInputVal,
          tagsFromFoundPosts: store.getState().tagsFromFoundPosts,
        });
      }}
      onInput={debounce(e => {
        console.log(0);
        e.target.scrollLeft = 10000;

        dispatch({ type: 'show search menu' });
        dispatch({
          type: 'store search input val',
          searchInputVal: e.target.innerText,
        });
        dispatch({ type: 'get words from input' });
        dispatch({ type: 'get tags from input' });
        dispatch({
          type: 'find posts',
          typedWords: store.getState().typedWords,
          typedTags: store.getState().typedTags,
        });
        dispatch({
          type: 'get tags from found posts',
          foundPosts: store.getState().foundPosts,
        });
        dispatch({
          type: 'filter tags',
          tagsInputVal: store.getState().tagsInputVal,
          tagsFromFoundPosts: store.getState().tagsFromFoundPosts,
        });
      })}
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
          dispatch({ type: 'show 5 pages' });
          dispatch({ type: 'close search menu' });
          
          if (store.getState().searchInputVal === '') {
            dispatch({ type: 'remove search input val' });
            dispatch({ type: 'display following posts', postsToShow: _allPosts });
            dispatch({ type: 'remove remove found posts msg' });
            dispatch({ type: 'remove tags input val' });
            dispatch({ type: 'reset posts' });
            dispatch({ type: 'get tags from all posts' });
            return;
          }
          dispatch({ type: 'show found posts msg' });
          dispatch({ type: 'show remove found posts msg' });
          dispatch({ type: 'display following posts', postsToShow: store.getState().foundPosts });
          dispatch({ type: 'remove tags input val' });
        }

        if (e.key === 'Escape') {
          e.preventDefault();
          dispatch({ type: 'remove search input val' });
          dispatch({ type: 'display following posts', postsToShow: _allPosts });
          dispatch({ type: 'close search menu' });
          dispatch({ type: 'remove remove found posts msg' });
          dispatch({ type: 'remove tags input val' });
          dispatch({ type: 'remove search input val' });
          dispatch({ type: 'forget tags from input' });
          dispatch({ type: 'forget words from input' });
          dispatch({ type: 'reset posts' });
          dispatch({ type: 'get tags from all posts' });
          dispatch({ type: 'show 5 pages' });
          document.querySelector('#input').innerHTML = '';
        }
      }}
    />
  );
}

const DivStyled = styled.div`
  flex-grow: 1;
  padding-left: 5px;
  padding-right: 40px;
  font-size: 24px;
  border-width: 1px;
  border-color: #c0c0c0;
  border-style: solid;
  border-radius: 4px;
  outline-style: none;
  width: auto;
  min-width: 0; /* for shrinking */
  background-color: white;
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
    content: 'Search';
    color: #bfbfbf;
    font-weight: 200;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

// returns debounced function, not calling it
function debounce(fn, delay = 300) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      fn(...args);
    }, delay);
  };
}
