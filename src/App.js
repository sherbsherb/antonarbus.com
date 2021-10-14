import Mark from 'mark.js';
import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NavBar } from './components/nav/Nav.js';
import { Post } from './components/post/Post.js';
import SearchContainer from './components/search/_SearchContainer.js';
import { store } from './index.js';
import { _allPosts } from './posts/_allPosts.js';

export default function App() {
  const postsOnDisplayState = useSelector(state => state.postsOnDisplay);
  const dispatch = useDispatch()

  useEffect(() => {
    // highlight found words
    const context = document.querySelector('main');
    const instance = new Mark(context);
    instance.unmark();
    instance.mark(store.getState().typedWords);
  }, [postsOnDisplayState]);

  function returnPosts() {
    return postsOnDisplayState.map(o => (
      <Post post={o} key={o.id} />
    ));
  }

  // do not re-render posts on screen when search dropdown menu toggles
  const returnPostsMemo = useMemo(() => {
    return returnPosts();
  }, [postsOnDisplayState]);

  return (
    <div
      // close search dropdown menu if clicked outside
      onClick={() => { 
        dispatch({ type: 'close search menu' })
      }}
    >
      <NavBar />
      <SearchContainer/>
      <StyledMain>{returnPostsMemo}</StyledMain>
    </div>
  );

}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;