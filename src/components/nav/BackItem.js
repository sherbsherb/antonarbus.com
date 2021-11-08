import styled from 'styled-components';
import React from 'react';
import { MenuText } from './MenuText';
import { Icon } from './Icon';
import { LeftPart, MenuLink } from './MenuItem';
import { FaChevronLeft as LeftArrowIcon } from 'react-icons/fa';
import { ContextMenu } from './Menu';

export function BackItem() {
  const { goBack } = React.useContext(ContextMenu);

  return (
    <BackLink 
      href="" 
      onClick={e => {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation();
        goBack()
      }}
    >
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
  margin: 0px 16px;
  margin-top: 16px;
`;