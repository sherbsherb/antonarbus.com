import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import NavList from './NavList';

export const Context = createContext({});

export function Nav() {
  const [openedMenuState, setOpenedMenuState] = useState(null);
  const [prevMenuState, setPrevMenuState] = useState(null);
  const [showMenuState, setShowMenuState] = useState(false);
  const [isTopMenuState, setIsTopMenuState] = useState(false);

  const [whereToSlidState, setWhereToSlidState] = useState('backward')
  const [menuTransitionState, setMenuTransitionState] = useState(true)
  const swapMenu = () => setMenuTransitionState(!menuTransitionState)

  function showMenu(o) {
    const isMenu = o.menu;

    if (!isMenu) {
      if (!showMenuState) return;
      closeMenu();
      return;
    }

    if (isMenu) {
      const menu = o.menu;
      setIsTopMenuState(true);
      setShowMenuState(true);
      setOpenedMenuState({
        ...menu,
        navItemId: o.id,
        prevMenu: [],
      });
      setPrevMenuState({
        ...menu,
        navItemId: o.id,
        prevMenu: [],
      });

    }
  }

  function changeMenu(o) {
    const isSubMenu = o.menu;
    if (!isSubMenu) return;

    setIsTopMenuState(false);
    const subMenu = o.menu;

    setPrevMenuState(openedMenuState)
    setOpenedMenuState({
      ...subMenu,
      navItemId: openedMenuState.navItemId,
      prevMenu: [...openedMenuState.prevMenu, openedMenuState],
    });
    
  }

  function closeMenu(e) {
    e?.stopPropagation();
    if (showMenuState) {
      setShowMenuState(false);
      setOpenedMenuState(null);
      setPrevMenuState(null)
    }
  }

  function goBack(e) {
    e?.stopPropagation();
    setPrevMenuState(openedMenuState)
    setOpenedMenuState(openedMenuState.prevMenu.pop());
    setWhereToSlidState('forward')
    swapMenu()
  }

  function navKeyboardHandler(e) {
    const { key } = e;
    // console.log(keyCode);
    if (!openedMenuState) return;
    const isNestedMenu = openedMenuState?.prevMenu?.length > 0;
    isNestedMenu && key === 'Backspace' && goBack();
    !isNestedMenu && key === 'Backspace' && closeMenu();
    key === 'Escape' && closeMenu();
  }

  const contextValue = {
    openedMenuState,
    setOpenedMenuState,
    showMenuState,
    setShowMenuState,
    showMenu,
    changeMenu,
    closeMenu,
    goBack,
    navKeyboardHandler,
    isTopMenuState,
    setIsTopMenuState,
    menuTransitionState,
    swapMenu,
    prevMenuState,
    setPrevMenuState,
    whereToSlidState,
    setWhereToSlidState
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
