import styled from "styled-components";

export function Title(props) {
  return <H3Styled className="title">{props.children}</H3Styled>;
}

const H3Styled = styled.h3`
  display: block;
  margin-top: 40px;
  margin-bottom: 25px;
  font-size: 24px;
  color: black;
  text-align: center;
  line-height: 1.1;
`;
