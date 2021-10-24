import styled from 'styled-components';
import React from 'react';
import { MenuText } from './MenuText';
import { Icon } from './Icon';
import { LeftPart, MenuLink } from './MenuItem';
import { FaChevronLeft as LeftArrowIcon } from 'react-icons/fa';

export function BackItem({ prevMenu }) {
  return (
    <BackLink href="#" onClick={prevMenu}>
      <LeftPart>
        <Icon><LeftArrowIcon /></Icon>
        <MenuText>Back</MenuText>
      </LeftPart>
    </BackLink>
  );
}

export const BackLink = styled(MenuLink)`
  color: #858383;
  animation: none;
`;