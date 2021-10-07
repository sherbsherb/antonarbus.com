import styled from 'styled-components';

export function Text(props) {
  return <PStyled>{props.children}</PStyled>;
}

const PStyled = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  align-self: flex-start;
  color: #3a3a3a;
`;