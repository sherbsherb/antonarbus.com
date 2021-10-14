import { useSelector } from 'react-redux';
import styled from 'styled-components';

export function FoundPosts(props) {
  const {foundPosts, searchBtnClickHandler} = props
  const foundPostsState = useSelector(state => state.foundPosts);

  if (foundPostsState.length === 0)
    return (
      <FoundPostsStyled>Not found</FoundPostsStyled>
    );
  const ending = foundPostsState.length !== 1 ? 's' : '';
  return (
    <FoundPostsStyled onClick={searchBtnClickHandler}>
      Show {ending ? 'all' : ''} {foundPostsState.length} post{ending}
    </FoundPostsStyled>
  );
}

const FoundPostsStyled = styled.span`
  position: absolute;
  top: 12px;
  right: 0px;
  left: 0px;
  color: grey;
  text-align: center;
  cursor: pointer;
  transform: translateX(-50%);
  left: 50%;

  &:hover {
    color: #1c1c1c;
  }
`;
