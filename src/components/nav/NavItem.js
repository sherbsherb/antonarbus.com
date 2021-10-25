import React from "react";
import styled from "styled-components";
import { Menu } from "./Menu";
import { Icon } from "./Icon";

// component inside the Nav = icons
export function NavItem({
  navO,
  openedMenuState,
  prevMenu,
  closeMenu,
  showMenu,
  changeMenu,
  showMenuContainerState,
  willOpenTopMenu,
  navKeyboardHandler,
}) {
  // console.log('NavItem rendered');
  return (
    <NavItemLi>
      <Icon
        href="#"
        onClick={e => {
          e.stopPropagation();
          showMenu(navO);
        }}
        // onMouseEnter={() => showMenu(navItem)}
        // onMouseLeave={() => closeMenu()}
      >
        {navO.icon}
        {navO.text}
      </Icon>

      {/* show only specific menu for NavItem id, otherwise all existing menus are shown */}
      {showMenuContainerState &&
        openedMenuState?.underNavItemId === navO.id && (
          <Menu
            openedMenuState={openedMenuState}
            prevMenu={prevMenu}
            closeMenu={closeMenu}
            changeMenu={changeMenu}
            willOpenTopMenu={willOpenTopMenu}
            navKeyboardHandler={navKeyboardHandler}
          />
        )}
    </NavItemLi>
  );
}

const navSize = '60px';

export const NavItemLi = styled.li`
  width: ${parseInt(navSize) * 0.8}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;