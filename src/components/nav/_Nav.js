import React, { useState } from 'react';
import {
  NavItemStyled,
} from './NavStyledComponents';


// can use alias with 'as'
import navStructure from './navStructure';
import { NavItem } from './NavItem';
import styled from 'styled-components';

// var
let willOpenTopMenu = true;

// navbar
export function Nav() {
  // states
  const [openedMenuState, setOpenedMenuState] = useState(null);
  const [showMenuContainerState, setShowMenuContainerState] = useState(false);

  // update state to show menu
  function showMenu(o) {
    // // console.log('showMenu() func fired');
    const isMenu = o.menu;

    if (!isMenu) {
      // // console.log('no menu inside navItem');
      // if menu container is ON, remove it
      if (showMenuContainerState) {
        closeMenu();
        return;
      }

      if (!showMenuContainerState) {
        // // console.log('no showing menu, do nothing');
        return;
      }
    }

    if (isMenu) {
      const menu = o.menu;
      willOpenTopMenu = true;
      setShowMenuContainerState(true);
      setOpenedMenuState({
        ...menu,
        underNavItemId: o.id,
        // just opened first menu, no previous menus exist yet
        prevMenu: [],
      });
      //// console.log('showed menu');
    }
  }

  // update state to change menu
  function changeMenu(o) {
    // console.log('changeMenu() func fired');

    const isSubMenu = o.menu;

    if (!isSubMenu) {
      // console.log('no sub-menu');
      return;
    }

    // console.log('fall one level down in menu');
    willOpenTopMenu = false;
    const subMenu = o.menu;
    setOpenedMenuState({
      ...subMenu,
      underNavItemId: openedMenuState.underNavItemId,
      prevMenu: [...openedMenuState.prevMenu, openedMenuState],
    });
  }

  // update state to close menu
  function closeMenu(e) {
    // console.log('closeMenu() func fired');

    e?.stopPropagation();

    if (showMenuContainerState) {
      willOpenTopMenu = false;
      setShowMenuContainerState(false);
      setOpenedMenuState(null);
      // console.log('closed existing menu');
    }
  }

  // assign previous menu obj from array to a state to re-render it
  function prevMenu(e) {
    // console.log('prevMenu() func fired');

    e?.stopPropagation();
    willOpenTopMenu = false;
    setOpenedMenuState(openedMenuState.prevMenu.pop());
    // console.log('clicked Back');
  }

  // add actions for Escape, Backspace, Enter, Arrows
  function navKeyboardHandler(e) {
    console.log('navKeyboardHandler() func fired');

    const { key } = e;
    //// console.log(keyCode);
    if (!openedMenuState) return;
    const isNestedMenu = openedMenuState?.prevMenu?.length > 0;
    isNestedMenu && key === 'Backspace' && prevMenu();
    !isNestedMenu && key === 'Backspace' && closeMenu();
    key === 'Escape' && closeMenu();
  }

  // console.log('Nav rendered');
  return (
    <NavStyled>
      {/* <Logo /> */}
      <NavItemStyled>
        {navStructure.map(
          navO =>
            navO.visible && (
              <NavItem
                navO={navO}
                openedMenuState={openedMenuState}
                prevMenu={prevMenu}
                closeMenu={closeMenu}
                showMenu={showMenu}
                changeMenu={changeMenu}
                showMenuContainerState={showMenuContainerState}
                willOpenTopMenu={willOpenTopMenu}
                navKeyboardHandler={navKeyboardHandler}
                key={navO.id}
              />
            )
        )}
      </NavItemStyled>
      {/* <Hamburger /> */}
    </NavStyled>
  );
}

const navSize = '60px';
const border = '1px solid #474a4d';

const NavStyled = styled.nav`
  height: ${navSize};
  padding: 0 1rem;
  border-bottom: ${border};
  position: relative;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
`;