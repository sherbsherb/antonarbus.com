import React from "react";
import styled from "styled-components";
import { Post } from "./Post";

export function PostsContainer(props) {
  const {state, setState} = props
  return (
    <MainStyled>
    { 
      state.postsOnDisplay.map(o => (
        <Post post={o} key={o.id} state={state} setState={setState} />
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
