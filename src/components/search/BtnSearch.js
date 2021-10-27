import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { store } from '../../App';
import { _allPosts } from '../../posts/_allPosts';

export function BtnSearch() {
  const dispatch = useDispatch();

  return (
    <ButtonStyled
      onClick={e => {
        e.preventDefault();
        if (store.getState().searchInputVal === '') {
          dispatch({ type: 'remove search input val' });
          dispatch({ type: 'display following posts', postsToShow: _allPosts });
          dispatch({ type: 'close search menu' });
          dispatch({ type: 'remove remove found posts msg' });
          dispatch({ type: 'remove tags input val' });
          dispatch({ type: 'reset posts' });
          dispatch({ type: 'get tags from all posts' });
          window.history.pushState({}, null, "/");
          return;
        }
        dispatch({ type: 'close search menu' });
        dispatch({ type: 'remove tags input val' })
        dispatch({ type: 'show found posts msg' });
        dispatch({ type: 'show remove found posts msg' });
        dispatch({
          type: 'display following posts',
          postsToShow: store.getState().foundPosts,
        });
        window.history.pushState({}, null, "/");
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
