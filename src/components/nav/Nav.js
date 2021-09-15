// ! how to make similar hamburger, which dynamically pop up when there is no space
// ! we can not grab an el with querySelector as we do in native JS

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './nav.css';

// import & set icons
import { FaChevronRight } from 'react-icons/fa';
// can use alias with 'as'
import { FaChevronLeft as LeftIcon } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
// can insert component as a JS variable instead of JSX tag
const closeIcon = React.createElement(IoClose, {});

// navbar

// CSS const
const bg = '#242526';
const subMenuColor = '#18191a';
const bgAccent = '#484a4d';
const textColor = '#dadce1';
const navSize = '60px';
const border = '1px solid #474a4d';
const borderRadius = '8px';
const speed = '500ms';

const NavStyled = styled.nav`
  height: ${navSize};
  background-color: ${bg};
  padding: 0 1rem;
  border-bottom: ${border};
`;

const NavItemStyled = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  list-style: none;
  margin: 0;
  padding: 0;
`;

export function NavBar({ navContent, openedMenuState, setOpenedMenuState }) {
  //#region HELPER FUNCS

  // ! helper funcs are in the top component
  // ! wish to move them up, tu they use state
  // ! but state can be created only inside a component

  // update state to show menu
  function showMenu(menuWithSubMenu) {
    const isSubMenu = menuWithSubMenu.menu;

    if (!isSubMenu) {
      setOpenedMenuState(null);
      console.log('no sub-menu');
    }

    if (isSubMenu) {
      const subMenu = menuWithSubMenu.menu;
      // for previous menu return when click on Back

      setOpenedMenuState({
        ...subMenu,
        underNavItemId: menuWithSubMenu.id,
        prevMenu: [],
      });

      console.log('showed menu');
    }
  }

  // update state to change menu
  function changeMenu(menuWithSubMenu) {
    const isSubMenu = menuWithSubMenu.menu;

    if (!isSubMenu) {
      console.log('no sub-menu');
      return;
    }

    const subMenu = menuWithSubMenu.menu;
    setOpenedMenuState({
      ...subMenu,
      underNavItemId: openedMenuState.underNavItemId,
      prevMenu: [...openedMenuState.prevMenu, openedMenuState],
    });

    console.log('one level down in menu');
  }

  // update state to close menu
  function closeMenu(e) {
    console.log('menu closed');
    e?.stopPropagation();
    openedMenuState && setOpenedMenuState(null);
  }

  // assign previous menu obj from array to a state to re-render it
  function prevMenu(e) {
    e?.stopPropagation();
    setOpenedMenuState(openedMenuState.prevMenu.pop());
    console.log('clicked Back');
  }

  // add actions for Escape, Backspace, Enter, Arrows
  function navKeyboardHandler(e) {
    const { key, keyCode } = e;
    console.log(keyCode);
    if (!openedMenuState) return;
    const isNestedMenu = openedMenuState?.prevMenu?.length > 0;
    isNestedMenu && key === 'Backspace' && prevMenu();
    !isNestedMenu && key === 'Backspace' && closeMenu();
    key === 'Escape' && closeMenu();
  }

  //#endregion

  //#region EVENT LISTENERS FOR WINDOW

  // use events to navigate over menu with keys
  // ! we listen for keys on Window, how to do it properly no clue
  // ! how to disable an event listener on menu close && activate on menu pop-up
  useEffect(() => {
    window.addEventListener('keydown', navKeyboardHandler);
    // ! do not understand why func is returned
    return () => window.removeEventListener('keydown', navKeyboardHandler);
  }, [openedMenuState]);

  // close menu if click outside
  // ! nice to listen for it on menu popup and stop listening when menu is off
  useEffect(() => {
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, [openedMenuState]);

  //#endregion

  // NavBar component, is the container on the top
  return (
    // ? we throw props over & over again, is there more elegant way?
    <NavStyled>
      <NavItemStyled>
        {navContent.map(
          (navItem) =>
            navItem.visible && (
              <NavItem
                navItem={navItem}
                openedMenuState={openedMenuState}
                prevMenu={prevMenu}
                closeMenu={closeMenu}
                showMenu={showMenu}
                changeMenu={changeMenu}
              />
            )
        )}
      </NavItemStyled>
    </NavStyled>
  );
}

const Icon = styled.a`
  width: ${parseInt(navSize) * 0.5}px;
  height: ${parseInt(navSize) * 0.5}px;
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  color: ${textColor};

  svg {
    fill: ${textColor};
    width: 20px;
    height: 20px;
  }

  &:hover {
    filter: brightness(1.2);
  }
`;

const NavItemLi = styled.li`
  width: ${parseInt(navSize) * 0.8}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// component inside the NavBar = icons
export function NavItem({
  navItem,
  openedMenuState,
  prevMenu,
  closeMenu,
  showMenu,
  changeMenu,
}) {
  return (
    <NavItemLi
      // when clicked 'setOpenedMenuState' is updated and menu is re-rendered
      onClick={(e) => {
        e.stopPropagation();
        showMenu(navItem);
      }}
      // onMouseEnter={() => showMenu(navItem)}
      // onMouseLeave={() => closeMenu()}
    >
      <Icon href="#">
        {navItem.icon}
        {navItem.text}
      </Icon>

      {/* show only specific menu for NavItem id, otherwise all existing menus are shown */}
      {openedMenuState && openedMenuState.underNavItemId === navItem.id && (
        <DropdownMenu
          openedMenuState={openedMenuState}
          prevMenu={prevMenu}
          closeMenu={closeMenu}
          changeMenu={changeMenu}
        />
      )}
    </NavItemLi>
  );
}

// menu with 'back' & 'close' buttons on top & MenuItems

const MenuContainer = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: ${bg};
  border: ${border};
  border-radius: ${borderRadius};
  padding: 1rem;
  overflow: hidden;
  z-index: 666;
`;

export function DropdownMenu({
  openedMenuState,
  prevMenu,
  closeMenu,
  changeMenu,
}) {
  const isNestedMenu = openedMenuState?.prevMenu?.length > 0;
  return (
    <MenuContainer>
      {isNestedMenu && <BackItem prevMenu={prevMenu} />}
      {!isNestedMenu && <CloseItem closeMenu={closeMenu} />}
      {openedMenuState.menuItems.map((menuItem) => (
        <MenuItem menuItem={menuItem} changeMenu={changeMenu} />
      ))}
    </MenuContainer>
  );
}

// item inside menu
const MenuLink = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: ${borderRadius};
  padding: 0.5rem;
  color: ${textColor};

  &:hover {
    background-color: #525357;
  }
`;

const MenuIcon = styled(Icon)`
  &:hover {
    filter: none;
  }
`;

const MenuIconRight = styled(Icon)`
  margin-left: auto;
  background-color: transparent;
`;

const MenuText = styled.span`
  margin-left: 10px;
`;

export function MenuItem({ menuItem, changeMenu }) {
  return (
    <MenuLink
      href="#1"
      onClick={(e) => {
        e?.stopPropagation();
        changeMenu(menuItem);
      }}
    >
      <Icon>{menuItem.iconLeft}</Icon>
      <MenuText>{menuItem.text}</MenuText>
      {menuItem.menu && (
        <MenuIconRight>
          <FaChevronRight />
        </MenuIconRight>
      )}
    </MenuLink>
  );
}

const BackLink = styled(MenuLink)``;

export function BackItem({ prevMenu }) {
  return (
    <BackLink href="#1" onClick={prevMenu}>
      <MenuIcon>
        <LeftIcon />
      </MenuIcon>
      <MenuText>Back</MenuText>
    </BackLink>
  );
}

const CloseLink = styled(MenuLink)``;

export function CloseItem({ closeMenu }) {
  return (
    <CloseLink href="#1" onClick={closeMenu}>
      <MenuIcon>{closeIcon}</MenuIcon>
      <MenuText>Close</MenuText>
    </CloseLink>
  );
}
