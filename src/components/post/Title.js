import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { _allPosts } from '../../posts/_allPosts';

export function Title(props) {
  const dispatch = useDispatch();
  return (
    <H3Styled className="title">
      <Link
        to={'/post/' + props.uriPostName}

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

  a {
    color: #0083bf;
  }
`;
