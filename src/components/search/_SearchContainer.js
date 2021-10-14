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

export default function SearchContainer() {
  const showSearchMenuState = useSelector(state => state.showSearchMenu);
  const showRemoveFoundPostsMsgState = useSelector(
    state => state.showRemoveFoundPostsMsg
  );
  const searchInputValState = useSelector(state => state.searchInputVal);
  const foundPostsState = useSelector(state => state.foundPosts);
  const filteredTagsState = useSelector(state => state.filteredTags);

  const dispatch = useDispatch();

  function highlightTextInPreview(words) {
    const context = document.querySelectorAll('.post-preview');
    const instance = new Mark(context);
    instance.unmark();
    instance.mark(words);
  }

  useEffect(() => {
    highlightTextInPreview(store.getState().typedWords);
  });

  return (
    <DivStyled
      // do not close dropdown search menu if clicked inside
      onClick={e => e.stopPropagation()}
    >
      <InputSearch />
      <BtnCancel />
      <BtnSearch />
      {showRemoveFoundPostsMsgState && <RemoveFoundPosts />}
      {showSearchMenuState && (
        <SearchPreviewContainer>
          <FoundPosts />
          <TagsContainer />
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
