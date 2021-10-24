import styled, { css, keyframes } from 'styled-components';
import { MenuIconRight } from './NavStyledComponents';
import { FaChevronRight as ForwardIcon } from 'react-icons/fa';
import React from 'react';
import { MenuText } from './MenuText';
import { Icon } from './Icon';

export function MenuItem({ menuItem, changeMenu, willOpenTopMenu }) {
  // console.log('MenuItem rendered');
  return (
    <MenuLink
      href="#"
      willOpenTopMenu={willOpenTopMenu}
      onClick={e => {
        e?.stopPropagation();
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
            <MenuIconRight>
              <ForwardIcon />
            </MenuIconRight>
          </RightPart>
        )
      }
    </MenuLink>
  );
}

const appearAnimation = keyframes`
  from { transform: translateX(-50%); }
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
  color: ${props => props.color};
  animation: ${props =>
    props.willOpenTopMenu
      ? css`none`
      : css`
          ${appearAnimation} 200ms cubic-bezier(0, 1, 0.5, 1)
        `};

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
