import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import NavList from './NavList';

export const Context = createContext({});

export function Nav() {
  // console.log('Nav rendered');

  const [openedMenuState, setOpenedMenuState] = useState(null);
  const [showMenuContainerState, setShowMenuContainerState] = useState(false);
  const [isTopMenuState, setIsTopMenuState] = useState(false);

  function showMenu(o) {
    // console.log('showMenu() func fired');
    const isMenu = o.menu;

    if (!isMenu) {
      // console.log('no menu inside navItem');
      if (showMenuContainerState) {
        closeMenu();
        return;
      }

      if (!showMenuContainerState) {
        // console.log('no showing menu, do nothing');
        return;
      }
    }

    if (isMenu) {
      const menu = o.menu;
      setIsTopMenuState(true);
      setShowMenuContainerState(true);
      setOpenedMenuState({
        ...menu,
        underNavItemId: o.id,
        // just opened first menu, no previous menus exist yet
        prevMenu: [],
      });
      // console.log('showed menu');
    }
  }

  function changeMenu(o) {
    // console.log('changeMenu() func fired');
    const isSubMenu = o.menu;
    if (!isSubMenu) return;

    // console.log('fall one level down in menu');
    setIsTopMenuState(false);
    const subMenu = o.menu;
    setOpenedMenuState({
      ...subMenu,
      underNavItemId: openedMenuState.underNavItemId,
      prevMenu: [...openedMenuState.prevMenu, openedMenuState],
    });
  }

  function closeMenu(e) {
    // console.log('closeMenu() func fired');

    e?.stopPropagation();

    if (showMenuContainerState) {
      setIsTopMenuState(false);
      setShowMenuContainerState(false);
      setOpenedMenuState(null);
      // console.log('closed existing menu');
    }
  }

  function prevMenu(e) {
    // console.log('prevMenu() func fired');

    e?.stopPropagation();
    setIsTopMenuState(false);
    setOpenedMenuState(openedMenuState.prevMenu.pop());
    // console.log('clicked Back');
  }

  function navKeyboardHandler(e) {
    console.log('navKeyboardHandler() func fired');

    const { key } = e;
    // console.log(keyCode);
    if (!openedMenuState) return;
    const isNestedMenu = openedMenuState?.prevMenu?.length > 0;
    isNestedMenu && key === 'Backspace' && prevMenu();
    !isNestedMenu && key === 'Backspace' && closeMenu();
    key === 'Escape' && closeMenu();
  }

  const contextValue = {
    openedMenuState,
    setOpenedMenuState,
    showMenuContainerState,
    setShowMenuContainerState,
    showMenu,
    changeMenu,
    closeMenu,
    prevMenu,
    navKeyboardHandler,
    isTopMenuState,
    setIsTopMenuState,
  };

  return (
    <Context.Provider value={contextValue}>
      <NavStyled>
        {/* <Logo /> */}
        <NavList />
        {/* <Hamburger /> */}
      </NavStyled>
    </Context.Provider>
  );
}

const NavStyled = styled.nav`
  height: 60px;
  padding: 0 1rem;
  border-bottom: 1px solid #474a4d;
  position: relative;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
`;
