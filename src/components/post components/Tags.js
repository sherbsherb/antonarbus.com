import React from 'react';
import styled from 'styled-components';
import { Tag } from './Tag';

export function Tags(props) {
  const { tags } = props
  return (
    <DivStyled>
      {tags.map(tag => (
        <Tag tag={tag} key={tag} />
      ))}
    </DivStyled>
  );
}

const DivStyled = styled.time`
  margin-top: 20px; ;
`;
