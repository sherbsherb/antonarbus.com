// ! how to make similar hamburger, which dynamically pop up when there is no space
// ! we can not grab an el with querySelector as we do in native JS

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './nav.css';
import uuid from 'react-uuid';
// import & set icons
import { FaChevronRight } from 'react-icons/fa';
// can use alias with 'as'
import { FaChevronLeft as LeftIcon } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
// can insert component as a JS variable instead of JSX tag
const closeIcon = React.createElement(GrClose, {});

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

  ul {
      max-width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
  }
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
      <ul>
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
                key={uuid()}
              />
            )
        )}
      </ul>
    </NavStyled>
  );
}

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
    <li
      className="nav-item"
      // when clicked 'setOpenedMenuState' is updated and menu is re-rendered
      onClick={(e) => {
        e.stopPropagation();
        showMenu(navItem);
      }}
      // onMouseEnter={() => showMenu(navItem)}
      // onMouseLeave={() => closeMenu()}
    >
      <a href="#" className="icon-button">
        {navItem.icon}
        {navItem.text}
      </a>

      {/* show only specific menu for NavItem id, otherwise all existing menus are shown */}
      {openedMenuState && openedMenuState.underNavItemId === navItem.id && (
        <DropdownMenu
          openedMenuState={openedMenuState}
          prevMenu={prevMenu}
          closeMenu={closeMenu}
          changeMenu={changeMenu}
        />
      )}
    </li>
  );
}

// menu with 'back' & 'close' buttons on top & DropdownItems
export function DropdownMenu({
  openedMenuState,
  prevMenu,
  closeMenu,
  changeMenu,
}) {
  const isNestedMenu = openedMenuState?.prevMenu?.length > 0;
  return (
    <div className="dropdown">
      {isNestedMenu && <BackItem prevMenu={prevMenu} />}
      {!isNestedMenu && <CloseItem closeMenu={closeMenu} />}

      {openedMenuState.menuItems.map((menuItem) => (
        <DropdownItem menuItem={menuItem} changeMenu={changeMenu} key={uuid()} />
      ))}
    </div>
  );
}

// item inside menu
export function DropdownItem({ menuItem, changeMenu }) {
  return (
    <a
      href="#1"
      className="menu-item"
      onClick={(e) => {
        e?.stopPropagation();
        changeMenu(menuItem);
      }}
    >
      <span className="icon-button">{menuItem.iconLeft}</span>
      {menuItem.text}
      {/* add arrow if sub-menu is available */}
      {menuItem.menu && (
        <span className="icon-button icon-right">{<FaChevronRight />}</span>
      )}
    </a>
  );
}

export function BackItem({ prevMenu }) {
  return (
    <a href="#1" className="menu-item" onClick={prevMenu}>
      <span className="icon-button">{<LeftIcon />}</span>
      Back
    </a>
  );
}

export function CloseItem({ closeMenu }) {
  return (
    <a href="#1" className="menu-item" onClick={closeMenu}>
      <span className="icon-button">{closeIcon}</span>
      Close
    </a>
  );
}
