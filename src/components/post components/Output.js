import styled from 'styled-components';

export function Output(props) {
  return <AStyled>{props.children}</AStyled>;
}

const AStyled = styled.a`
  cursor: pointer;
  color: #0098f7;
  text-decoration: none;
`;