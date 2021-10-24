import styled from 'styled-components';
import React from 'react';
import { MenuText } from './MenuText';
import { Icon } from './Icon';
import { LeftPart, MenuLink } from './MenuItem';
import { IoClose } from 'react-icons/io5';
const closeIcon = React.createElement(IoClose, {});

export function CloseItem({ closeMenu }) {
  return (
    <CloseLink href="#" onClick={closeMenu}>
      <LeftPart>
        <Icon>{closeIcon}</Icon>
        <MenuText>Close</MenuText>
      </LeftPart>
    </CloseLink>
  );
}

const CloseLink = styled(MenuLink)`
  color: #858383;
  animation: none;
`;