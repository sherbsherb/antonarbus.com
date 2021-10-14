import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { store } from '../..';

export function RemoveFoundPosts({ closeFoundPostsContainer, foundPostsNum }) {
  
  const dispatch = useDispatch()

  return (
    <DivStyled>
      <span>
        {!!foundPostsNum && foundPostsNum}
        {!!foundPostsNum && foundPostsNum && ' post'}
        {!!foundPostsNum && (foundPostsNum > 1 ? 's are ' : ' is ')}
        {!foundPostsNum && 'Not '}
        found
      </span>
      <span onClick={
        (e) => {
          closeFoundPostsContainer(e)

          dispatch({
            type: 'display all posts',
          });
        }
        
        }>⨉</span>
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
