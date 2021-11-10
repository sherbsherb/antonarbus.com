import styled from 'styled-components';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../App';
import { _allPosts } from '../../posts/_allPosts';

export function ShowMorePosts() {
  const dispatch = useDispatch();
  const postsOnDisplayState = useSelector(state => state.postsOnDisplay);

  return <Btn onClick={() => {
    dispatch({
      type: 'show more pages',
      maxNumOfPosts: postsOnDisplayState.length,
    });
  }}>Show more</Btn>;
}

const Btn = styled.button`
  margin-top: 20px;
  padding: .7em;
  cursor: pointer;
  border-radius: 10px;
  border-width: 0px;
  background-color: #6dbadd;
  color: white;
  box-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  text-shadow: 0 1px 2px rgb(0 0 0 / 20%);
  font-weight: bold;
  &:hover {
    background-color: #4eb2df;
  }
`;
