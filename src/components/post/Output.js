import styled from 'styled-components';

export function Output(props) {
  return <DivStyled>{props.children}</DivStyled>;
}

const DivStyled = styled.div`
  background: #f3fcff;
  padding: 0.5em;
  margin: 10px 0px;
  overflow: auto;
  border-radius: 4px;
  position: relative;
`;
