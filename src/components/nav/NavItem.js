import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { Menu } from "./_Nav";


// component inside the NavBar = icons
export function NavItem({
  navObj,
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
          showMenu(navObj);
        }}
        // onMouseEnter={() => showMenu(navItem)}
        // onMouseLeave={() => closeMenu()}
      >
        {navObj.icon}
        {navObj.text}
      </Icon>

      {/* show only specific menu for NavItem id, otherwise all existing menus are shown */}
      {showMenuContainerState &&
        openedMenuState?.underNavItemId === navObj.id && (
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