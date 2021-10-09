import styled from 'styled-components';

export function FoundPosts(props) {
  const {foundPosts, searchBtnClickHandler} = props
  if (foundPosts.length === 0)
    return (
      <FoundPostsStyled>Not found</FoundPostsStyled>
    );
  const ending = foundPosts.length !== 1 ? 's' : '';
  return (
    <FoundPostsStyled onClick={searchBtnClickHandler}>
      Show {ending ? 'all' : ''} {foundPosts.length} post{ending}
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
