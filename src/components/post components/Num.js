import styled from 'styled-components';

export function Num(props) {
  return <SpanStyled>Post #{props.num}</SpanStyled>;
}

const SpanStyled = styled.span`
  position: absolute;
  color: #b0b0b0;
  top: -20px;
  right: 5px;
`;
