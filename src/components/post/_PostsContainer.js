import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Post } from "./Post";

export function PostsContainer(props) {
  const postsOnDisplayState = useSelector(state => state.postsOnDisplay);

  return (
    <MainStyled>
    { 
      postsOnDisplayState.map(o => (
        <Post post={o} key={o.id} />
      ))
    }
    </MainStyled>
  )
}

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
`;
