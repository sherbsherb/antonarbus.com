import styled from 'styled-components';
import React, { useContext } from 'react';
import { MenuText } from './MenuText';
import { Icon } from './Icon';
import { LeftPart, MenuLink } from './MenuItem';
import { IoClose } from 'react-icons/io5';
import { Context } from './_Nav';
const closeIcon = React.createElement(IoClose, {});

export function CloseItem() {
  const context = useContext(Context);
  const { closeMenu } = context;

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
