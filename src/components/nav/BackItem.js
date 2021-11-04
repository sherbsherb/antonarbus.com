import styled from 'styled-components';
import React, { useContext } from 'react';
import { MenuText } from './MenuText';
import { Icon } from './Icon';
import { LeftPart, MenuLink } from './MenuItem';
import { FaChevronLeft as LeftArrowIcon } from 'react-icons/fa';
import { Context } from './_Nav';

export function BackItem() {
  const context = useContext(Context);
  const { goBack } = context;

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