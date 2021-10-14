import Mark from 'mark.js';
import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { NavBar } from './components/nav/Nav.js';
import { Post } from './components/post/Post.js';
import SearchContainer from './components/search/SearchContainer.js';
import { store } from './index.js';
import { _allPosts } from './posts/_allPosts.js';

export default function App() {
  // console.log('App rendered');

  const dispatch = useDispatch()

  useEffect(() => {
    // highlight found words
    var context = document.querySelector('main');
    var instance = new Mark(context);
    instance.unmark();
    instance.mark(store.getState().typedWords);
  }, [store.getState().postsOnDisplay]);

  function returnPosts() {
    return store.getState().postsOnDisplay.map(o => (
      <Post post={o} key={o.id} />
    ));
  }

  // do not re-render posts on screen when search dropdown menu toggles
  const returnPostsMemo = useMemo(() => {
    return returnPosts();
  }, [store.getState().postsOnDisplay]);

  return (
    <div
      // close search dropdown menu if clicked outside
      onClick={() => {
        dispatch({
          type: 'close search menu'
        })

        dispatch({
          type: 'remove tags input val'
        })

        dispatch({
          type: 'remove tags input val'
        })
        
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

