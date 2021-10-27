import styled from "styled-components";

import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Mark from "mark.js";
import { store } from "../../App";
import { Post } from "../post/Post";

export function ManyPosts(props) {

  console.log(props)

  const postsOnDisplayState = useSelector(state => state.postsOnDisplay);
  
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
    <StyledMain>{returnPostsMemo}</StyledMain>
  )
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;