import styled, { keyframes } from 'styled-components';
import { FaChevronRight as ForwardIcon } from 'react-icons/fa';
import React, { useContext } from 'react';
import { MenuText } from './MenuText';
import { Icon } from './Icon';
import { Context } from './_Nav';

export function MenuItem(props) {
  const context = useContext(Context);
  const { changeMenu, isTopMenuState, swapMenu, setWhereToSlidState } = context;

  const { menuItem } = props
  return (
    <MenuLink
      href=""
      isTopMenuState={isTopMenuState}
      onClick={e => {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
        const isSubMenu = !!menuItem.menu
        if(!isSubMenu) return
        setWhereToSlidState('forward')
        swapMenu()
        changeMenu(menuItem);
      }}
    >
      <LeftPart>
        <Icon>{menuItem.iconLeft}</Icon>
        <MenuText>{menuItem.text}</MenuText>
      </LeftPart>

      {
        // show right arrow only if sub-menu exists
        menuItem.menu && (
          <RightPart>
            <MenuIconRight><ForwardIcon /></MenuIconRight>
          </RightPart>
        )
      }
    </MenuLink>
  );
}

const appearAnimation = keyframes`
  from { transform: translateX(-110%); }
  to { transform: translateX(0); }
`;

export const MenuLink = styled.a`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 0.5rem;
  color: #dadce1;
  white-space: nowrap;

  &:hover {
    background-color: #525357;
  }
`;

export const LeftPart = styled.span`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
`;

export const RightPart = styled.span`
  margin-left: 40px;
`;

export const MenuIconRight = styled(Icon)`
  background-color: transparent;
  margin-right: -5px;
`;