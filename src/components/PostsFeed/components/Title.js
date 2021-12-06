import styled from 'styled-components';
import { Link } from 'react-router-dom';

export function Title(props) {
  return (
    <H3Styled className="title">
      <Link
        to={`/post/${  props.uriPostName}`}
      >
        {props.children}
      </Link>
    </H3Styled>
  );
}

const H3Styled = styled.h3`
  display: block;
  margin-top: 40px;
  margin-bottom: 25px;
  font-size: 24px;
  text-align: center;
  line-height: 1.1;
  font-weight: 400;

  a {
    color: white;
    opacity: .8;

    &:hover {
      text-decoration-color: white;
      opacity: .8;
    }
  }
`;
