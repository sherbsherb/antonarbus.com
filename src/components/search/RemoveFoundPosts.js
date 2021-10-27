import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { store } from '../../App';

export function RemoveFoundPosts() {
  const dispatch = useDispatch();
  const postsOnDisplayNum = store.getState().postsOnDisplay.length;

  return (
    <DivStyled>
      <span>
        {!!postsOnDisplayNum && postsOnDisplayNum}
        {!!postsOnDisplayNum && postsOnDisplayNum && ' post'}
        {!!postsOnDisplayNum && (postsOnDisplayNum > 1 ? 's are ' : ' is ')}
        {!postsOnDisplayNum && 'Not '}
        shown
      </span>
      <span
        onClick={e => {
          e.preventDefault();
          dispatch({ type: 'remove search input val' });
          dispatch({ type: 'display all posts' });
          dispatch({ type: 'close search menu' });
          dispatch({ type: 'remove remove found posts msg' });
          dispatch({ type: 'remove tags input val' });
          dispatch({ type: 'forget tags from input' });
          dispatch({ type: 'forget words from input' });
          dispatch({ type: 'reset posts' });
          dispatch({ type: 'get tags from all posts' });
          document.querySelector('#input').innerHTML = '';
        }}
      >
        ⨉
      </span>
    </DivStyled>
  );
}

const DivStyled = styled.div`
  text-align: center;
  margin-top: 15px;
  position: absolute;
  top: 30px;
  width: 100%;

  & span:first-child {
    color: grey;
  }

  & span:last-child {
    color: #f99191;
    font-size: 20px;
    font-weight: 900;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      color: #f75151;
    }
  }
`;
