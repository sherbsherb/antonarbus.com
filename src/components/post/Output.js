import styled from 'styled-components';

export function Output(props) {
  return <DivStyled>{props.children}</DivStyled>;
}

const DivStyled = styled.a`
  background: #e9f4fb;
  padding: 0.5em;
  margin: 20px 0px;
  overflow: auto;
  border-radius: 4px;
`;
