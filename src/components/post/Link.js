import styled from 'styled-components';

export function Link(props) {
  return (
    <AStyled href={props.link} target="_blank">
      {props.text}
      {props.children}
    </AStyled>
  );
}

const AStyled = styled.a`
  cursor: pointer;
  color: #0098f7;
  text-decoration: none;
`;

