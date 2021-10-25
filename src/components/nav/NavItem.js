import React, { useContext } from 'react';
import styled from 'styled-components';
import { Menu } from './Menu';
import { Icon } from './Icon';
import { Context } from './_Nav';

// component inside the Nav = icons
export function NavItem(props) {
  const context = useContext(Context);
  const { openedMenuState, showMenu, showMenuContainerState } = context;
  const { navO } = props;

  // console.log('NavItem rendered');
  return (
    <NavItemLi>
      <Icon
        href="#"
        onClick={e => {
          e.stopPropagation();
          showMenu(navO);
        }}
      >
        {navO.icon}
        {navO.text}
      </Icon>

      {/* show only specific menu for NavItem id, otherwise all existing menus are shown */}
      {showMenuContainerState &&
        openedMenuState?.underNavItemId === navO.id && <Menu />}
    </NavItemLi>
  );
}

export const NavItemLi = styled.li`
  width: ${60 * 0.8}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
