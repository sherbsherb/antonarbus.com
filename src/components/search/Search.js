import Mark from 'mark.js';
import React, { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import styled from 'styled-components';
import { Tag } from '../post components/Post';

const FormStyled = styled.form`
  display: inline-flex;
  justify-content: space-between;
  align-items: stretch;

  margin: 0 auto;
  width: 90vw;

  margin-top: 30px;
  height: 40px;
  max-width: 500px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  z-index: 1;

  div#input {
    flex-grow: 1;
    padding: 5px;
    padding-right: 40px;
    font-size: 20px;
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
  }

  button {
    flex-grow: 0;
    font-size: 20px;
    border-radius: 4px;
    outline-style: none;
    border-style: solid;
    border-color: #c0c0c0;
    width: auto;
    padding: 0px 10px;
    margin-left: 10px;
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: grey;
      transition: border-color 200ms ease;
    }
  }

  .close {
    border: none;
    position: absolute;
    width: 32px;
    height: 32px;
    right: 100px;
    top: 4px;
    background-color: transparent;
  }

  .close:before,
  .close:after {
    content: ' ';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    width: 4px;
    background-color: #dcdcdc5c;
  }
  .close:hover:before,
  .close:hover:after {
    background-color: #ff6565bd;
  }

  .close::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .found-posts {
    position: absolute;
    top: 12px;
    right: 0px;
    left: 0px;
    color: grey;
    text-align: center;
    cursor: pointer;
    transform: translateX(-50%);
    left: 50%;

    &:hover {
      color: #1c1c1c;
    }
  }
`;

const SearchPreviewContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: #c0c0c0;
  padding: 35px 10px 10px 10px;
  background-color: #f6f6f6;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const SearchPreviewStyled = styled.div`
  background-color: #e8e8e8;
  margin: 10px 0px;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  padding: 5px;
  max-height: 92px;
  overflow-y: auto;

  &:hover {
    background-color: lightgrey;
  }

  h4 {
    margin-bottom: 5px;
  }

  summary {
    color: #3f3f3f;
    font-size: 14px;
  }
`;

function SearchPreviewItem(props) {
  return (
    <SearchPreviewStyled className="post-preview">
      <h4>{props.title}</h4>
      <summary>{props.summary}</summary>
    </SearchPreviewStyled>
  );
}

const TagsContainerStyled = styled(SearchPreviewStyled)`
  max-height: 110px;
  height: auto;
  padding: 7px;
  padding-bottom: 3px;
  &:hover {
    background-color: #e8e8e8;
  }
`;

function TagsContainer({ state, setState }) {
  const { foundTags } = state;
  return (
    <TagsContainerStyled>
      {foundTags.map(tag => (
        <Tag key={tag} state={state} setState={setState}>
          {tag}
        </Tag>
      ))}
    </TagsContainerStyled>
  );
}

function RemoveFoundPosts({
  setState,
  closeFoundPostsContainer,
  foundPostsNum,
}) {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '15px',
        position: 'absolute',
        top: '30px',
        width: '100%',
      }}
    >
      <span style={{ color: 'grey' }}>
        {foundPostsNum} post
        {foundPostsNum > 1 ? 's are' : ' is'} found
      </span>
      <span
        style={{
          color: '#f99191',
          fontSize: '20px',
          fontWeight: 900,
          marginLeft: '10px',
          cursor: 'pointer',
        }}
        onClick={closeFoundPostsContainer}
      >
        ⨉
      </span>
    </div>
  );
}

export default function Search({
  state,
  setState,
  returnUpdatedState,
  ...props
}) {
  const {
    posts,
    tags,
    inputVal,
    inputWords,
    inputTags,
    foundPosts,
    postsOnDisplay,
    foundTags,
    openSearchMenu,
    showFoundPosts,
    showRemoveFoundPosts,
  } = state;

  function highlightTextInPreview(words) {
    const context = document.querySelectorAll('.post-preview');
    const instance = new Mark(context);
    instance.unmark();
    instance.mark(words);
  }

  useEffect(() => {
    highlightTextInPreview(inputWords);
  });

  function FoundPosts() {
    if (foundPosts.length === 0)
      return <span className="found-posts">Not found</span>;
    const ending = foundPosts.length !== 1 ? 's' : '';
    return (
      <span className="found-posts" onClick={searchBtnClickHandler}>
        Show {ending ? 'all' : ''} {foundPosts.length} post{ending}
      </span>
    );
  }

  function searchBtnClickHandler(e) {
    e.preventDefault();

    if (document.querySelector('#input').innerText.length === 0) {
      closeFoundPostsContainer();
      return;
    }

    setState({
      ...state,
      showRemoveFoundPosts: true,
      openSearchMenu: false,
      postsOnDisplay: foundPosts,
    });
  }

  function closeFoundPostsContainer() {
    document.querySelector('#input').innerText = '';
    setState({
      ...state,
      ...returnUpdatedState(),
      // showRemoveFoundPosts: false,
      postsOnDisplay: posts,
      openSearchMenu: false,
    });
  }

  function debounce(callback, wait) {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        callback.apply(this, args);
      }, wait);
    };
  }

  return (
    <FormStyled
      // do not close dropdown search menu if clicked inside
      onClick={e => e.stopPropagation()}
    >
      <div
        id="input"
        contentEditable={true}
        placeholder="Search"
        onFocus={e => {
          const updateState = returnUpdatedState(e);
          setState({
            ...state,
            ...updateState,
            openSearchMenu: true,
          });
        }}
        onInput={debounce(e => {
          const updateState = returnUpdatedState(e);
          setState({
            ...state,
            ...updateState,
            openSearchMenu: true,
          });
          e.target.scrollLeft = 10000;
        }, 300)}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            searchBtnClickHandler(e);
            return;
          }

          if (e.key === 'Escape') {
            e.preventDefault();
            closeFoundPostsContainer();
            return;
          }
        }}
      ></div>

      <button
        className="close"
        onClick={e => {
          e.preventDefault();
          closeFoundPostsContainer();
        }}
      />

      <button onClick={searchBtnClickHandler}>Search</button>

      {showRemoveFoundPosts && (
        <RemoveFoundPosts
          foundPostsNum={foundPosts.length}
          setState={setState}
          closeFoundPostsContainer={closeFoundPostsContainer}
        />
      )}

      {openSearchMenu && (
        <SearchPreviewContainer>
          <FoundPosts />
          {!!foundTags.length && (
            <TagsContainer state={state} setState={setState} />
          )}
          {!!foundPosts.length &&
            inputVal &&
            foundPosts.map(o => {
              return (
                <SearchPreviewItem
                  title={o.titleTxt}
                  summary={foundPosts.length < 10 && o.postTxt}
                  key={o.id + '_preview'}
                />
              );
            })}
        </SearchPreviewContainer>
      )}
    </FormStyled>
  );
}
