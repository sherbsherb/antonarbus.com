import Mark from 'mark.js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
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
  console.log(showSearchMenuState)

  const dispatch = useDispatch()

  const {
    posts,
    inputVal,
    inputWords,
    foundPosts,
    foundTags,
    //openSearchMenu,
    // showRemoveFoundPosts,
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
      postsOnDisplay: foundPosts,
    });

    dispatch({
      type: 'close search menu'
    })

    dispatch({
      type: 'show remove found posts msg'
    })
  }

  function closeFoundPostsContainer() {
    document.querySelector('#input').innerText = '';
    setState({
      ...state,
      ...returnUpdatedState(),
      postsOnDisplay: posts,
      //openSearchMenu: false,
      inputFilterTagsVal: '',
    });

    dispatch({
      type: 'close search menu'
    })

    dispatch({
      type: 'remove remove found posts msg'
    })

    
  }

  return (
    <DivStyled
      // do not close dropdown search menu if clicked inside
      onClick={e => e.stopPropagation()}
    >
      <InputSearch
        returnUpdatedState={returnUpdatedState}
        setState={setState}
        state={state}
        searchBtnClickHandler={searchBtnClickHandler}
        closeFoundPostsContainer={closeFoundPostsContainer}
      />
      <BtnCancel closeFoundPostsContainer={closeFoundPostsContainer} />
      <BtnSearch searchBtnClickHandler={searchBtnClickHandler} />

      {showRemoveFoundPostsMsgState && (
        <RemoveFoundPosts
          foundPostsNum={foundPosts.length}
          setState={setState}
          closeFoundPostsContainer={closeFoundPostsContainer}
        />
      )}

      {showSearchMenuState && (
        <SearchPreviewContainer>
          <FoundPosts
            searchBtnClickHandler={searchBtnClickHandler}
            foundPosts={foundPosts}
          />
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
