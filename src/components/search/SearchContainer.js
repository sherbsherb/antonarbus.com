import Mark from 'mark.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { store } from '../..';
import { BtnCancel } from './BtnCancel';
import { BtnSearch } from './BtnSearch';
import { FoundPosts } from './FoundPosts';
import { InputSearch } from './InputSearch';
import { RemoveFoundPosts } from './RemoveFoundPosts';
import { SearchPreviewContainer } from './SearchPreviewContainer';
import { SearchPreviewItem } from './SearchPreviewItem';
import { TagsContainer } from './TagsContainer';

export default function SearchContainer(props) {
  const { state, setState, returnUpdatedState } = props;

  const showSearchMenuState = useSelector(state => state.showSearchMenu);
  const showRemoveFoundPostsMsgState = useSelector(state => state.showRemoveFoundPostsMsg);
  const searchInputValState = useSelector(state => state.searchInputVal);
  const foundPostsState = useSelector(state => state.foundPosts);
  const filteredTagsState = useSelector(state => state.filteredTags);

  console.log(showSearchMenuState)

  const dispatch = useDispatch()

  function highlightTextInPreview(words) {
    const context = document.querySelectorAll('.post-preview');
    const instance = new Mark(context);
    instance.unmark();
    instance.mark(words);
  }

  useEffect(() => {
    highlightTextInPreview(store.getState().typedWords);
  });

  function searchBtnClickHandler(e) {
    e.preventDefault();

    if (document.querySelector('#input').innerText.length === 0) {
      closeFoundPostsContainer();
      return;
    }

    setState({
      ...state,
      // showRemoveFoundPosts: true,
      //openSearchMenu: false,
      // postsOnDisplay: foundPosts,
    });

    dispatch({
      type: 'close search menu'
    })

    dispatch({
      type: 'show remove found posts msg'
    })

    dispatch({
      type: 'display found posts',
      foundPosts: store.getState().foundPosts
    })
  }

  function closeFoundPostsContainer() {
    document.querySelector('#input').innerText = '';

    dispatch({
      type: 'close search menu'
    })

    dispatch({
      type: 'remove remove found posts msg'
    })

    dispatch({
      type: 'remove tags input val'
    })

    dispatch({
      type: 'display found posts',
      foundPosts: store.getState().foundPosts
    })

    
  }

  return (
    <DivStyled
      // do not close dropdown search menu if clicked inside
      onClick={e => e.stopPropagation()}
    >
      <InputSearch
        searchBtnClickHandler={searchBtnClickHandler}
        closeFoundPostsContainer={closeFoundPostsContainer}
      />
      <BtnCancel closeFoundPostsContainer={closeFoundPostsContainer} />
      <BtnSearch searchBtnClickHandler={searchBtnClickHandler} />

      {showRemoveFoundPostsMsgState && (
        <RemoveFoundPosts
          closeFoundPostsContainer={closeFoundPostsContainer}
        />
      )}

      {showSearchMenuState && (
        <SearchPreviewContainer>
          <FoundPosts
            searchBtnClickHandler={searchBtnClickHandler}
            // foundPosts={foundPosts}
          />
          {!!filteredTagsState.length && (
            <TagsContainer state={state} setState={setState} />
          )}
          {!!foundPostsState.length &&
            searchInputValState &&
            foundPostsState.map(o => {
              return (
                <SearchPreviewItem
                  title={o.titleTxt}
                  summary={foundPostsState.length < 10 && o.postTxt}
                  key={o.id + '_preview'}
                />
              );
            })}
        </SearchPreviewContainer>
      )}
    </DivStyled>
  );
}

const DivStyled = styled.div`
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
`;
