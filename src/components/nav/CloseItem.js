import styled from 'styled-components';
import React, { useContext } from 'react';
import { MenuText } from './MenuText';
import { Icon } from './Icon';
import { LeftPart, MenuLink } from './MenuItem';
import { IoClose } from 'react-icons/io5';
import { ContextNavItem } from './NavItem';
const closeIcon = React.createElement(IoClose, {});

export function CloseItem() {
  const context = useContext(ContextNavItem);
  const { closeMenu } = context;

  return (
    <CloseLink 
      href="" 
      onClick={e => {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation();
        closeMenu()
      }}
    >
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
  margin: 0px 16px;
  margin-top: 16px;
`;
