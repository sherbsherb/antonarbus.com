import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { store } from '../..';

export function BtnSearch() {
  const dispatch = useDispatch();

  return (
    <ButtonStyled
      onClick={e => {
        e.preventDefault();
        if (store.getState().searchInputVal === '') {
          dispatch({ type: 'remove search input val' });
          dispatch({ type: 'display all posts' });
          dispatch({ type: 'close search menu' });
          dispatch({ type: 'remove remove found posts msg' });
          dispatch({ type: 'remove tags input val' });
          dispatch({ type: 'reset posts' });
          dispatch({ type: 'get tags from all posts' });
          return;
        }
        dispatch({ type: 'close search menu' });
        dispatch({ type: 'remove tags input val' })
        dispatch({ type: 'show found posts msg' });
        dispatch({ type: 'show remove found posts msg' });
        dispatch({
          type: 'display found posts',
          foundPosts: store.getState().foundPosts,
        });
      }}
    >
      Search
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  flex-grow: 0;
  font-size: 20px;
  border-radius: 4px;
  outline-style: none;
  border-style: solid;
  border-color: #c0c0c0;
  width: auto;
  padding: 0px 10px;
  margin-left: 10px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: grey;
    transition: border-color 200ms ease;
  }
`;
