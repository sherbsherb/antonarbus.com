import styled from 'styled-components';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mark from 'mark.js';
import { store } from '../../App';
import { Post } from './components/Post';
import { _allPosts } from '../../posts/_allPosts';
import { useLocation } from 'react-router-dom';
import { ShowMoreBtn } from './components/ShowMoreBtn';

export function PostsFeed(props) {
  const dispatch = useDispatch();
  const postsOnDisplayState = useSelector(state => state.postsOnDisplay);
  const fromToPages = useSelector(state => state.fromToPages);
  const location = useLocation();
  const postNameFromUri = props?.match?.params?.uriPostName;

  useEffect(() => {
    const doesPostFromUriExist = _allPosts.some(
      o => o.uriPostName === postNameFromUri
    );

    if (doesPostFromUriExist) {
      dispatch({
        type: 'display following posts',
        postsToShow: _allPosts.filter(o => o.uriPostName === postNameFromUri),
      });
      dispatch({ type: 'show remove found posts msg' });
    } else {
      dispatch({
        type: 'display following posts',
        postsToShow: _allPosts,
      });
    }
  }, [location, dispatch, postNameFromUri]);

  useEffect(() => {
    // highlight found words
    const context = document.querySelector('main');
    const instance = new Mark(context);
    if (window.location.pathname !== '/') {
      instance.unmark();
      return;
    }

    instance.unmark();
    instance.mark(store.getState().typedWords);
  }, [postsOnDisplayState]);

  // do not re-render posts on screen when search dropdown menu toggles
  const returnPostsMemo = useMemo(() => {
    function returnPosts() {
      return postsOnDisplayState
        .map(o => <Post post={o} key={o.id} />)
        .slice(fromToPages.from - 1, fromToPages.to);
    }
    return returnPosts();
  }, [postsOnDisplayState, fromToPages]);

  return (
    <StyledMain>
      {returnPostsMemo}
      {fromToPages.to < postsOnDisplayState.length ? <ShowMoreBtn /> : null}
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;
