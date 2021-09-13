import React, { useState } from 'react';
import './nav.css';

import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
const arrowRightIcon = React.createElement(FaChevronRight, {});
const arrowLeftIcon = React.createElement(FaChevronLeft, {});
const closeIcon = React.createElement(GrClose, {});

export function NavBar({ navState, openedMenuState, setOpenedMenuState }) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navState.map(
          (navItem) =>
            navItem.visible && (
              <NavItem
                navItem={navItem}
                openedMenuState={openedMenuState}
                setOpenedMenuState={setOpenedMenuState}
              />
            )
        )}
      </ul>
    </nav>
  );
}

export function NavItem({ navItem, openedMenuState, setOpenedMenuState }) {
  function showMenu(e) {
    e.stopPropagation();

    if (!navItem.menu) {
      setOpenedMenuState(null);
      console.log('no folded menu');
    }

    if (navItem.menu) {
      // for previous menu return when click on Back

      setOpenedMenuState({
        ...navItem.menu,
        underNavItemId: navItem.id,
        prevMenu: [],
      });

      console.log('showed menu');
    }
  }

  return (
    <li className="nav-item" onClick={showMenu}>
      <a href="#" className="icon-button">
        {navItem.icon}
        {navItem.text}
      </a>
      {openedMenuState && openedMenuState.underNavItemId === navItem.id && (
        <DropdownMenu
          openedMenuState={openedMenuState}
          setOpenedMenuState={setOpenedMenuState}
        />
      )}
    </li>
  );
}

export function DropdownMenu({ openedMenuState, setOpenedMenuState }) {
  const isNestedMenu = openedMenuState?.prevMenu?.length > 0;
  return (
    <div className="dropdown">

      {isNestedMenu && <BackItem openedMenuState={openedMenuState} setOpenedMenuState={setOpenedMenuState} />}
      {!isNestedMenu && <CloseItem setOpenedMenuState={setOpenedMenuState} />}
      

      {openedMenuState.menuItems.map((menuItem) => (
        <DropdownItem
          menuItem={menuItem}
          openedMenuState={openedMenuState}
          setOpenedMenuState={setOpenedMenuState}
        />
      ))}
    </div>
  );
}

export function DropdownItem({
  menuItem,
  openedMenuState,
  setOpenedMenuState,
}) {
  function swapMenu(e) {
    e.stopPropagation();
    if (!menuItem.menu) {
      console.log('no sub-menu');
      return;
    }

    setOpenedMenuState({
      ...menuItem.menu,
      underNavItemId: openedMenuState.underNavItemId,
      prevMenu: [...openedMenuState.prevMenu, openedMenuState]
    });

    // for previous menu return when click on Back

    console.log('one level down in menu');
  }

  return (
    <a href="#1" className="menu-item" onClick={swapMenu}>
      <span className="icon-button">{menuItem.iconLeft}</span>
      {menuItem.text}
      {menuItem.menu && (
        <span className="icon-button icon-right">{arrowRightIcon}</span>
      )}
    </a>
  );
}

export function BackItem({ openedMenuState, setOpenedMenuState }) {
  function goBack(e) {
    e.stopPropagation();
    setOpenedMenuState(openedMenuState.prevMenu.pop());
    console.log('clicked Back');
  }

  return (
    <a href="#1" className="menu-item" onClick={goBack}>
      <span className="icon-button">{arrowLeftIcon}</span>
      Back
    </a>
  );
}

export function CloseItem({ setOpenedMenuState }) {
  function close(e) {
    e.stopPropagation();
    setOpenedMenuState(null);
    console.log('closed');
  }

  return (
    <a href="#1" className="menu-item" onClick={close}>
      <span className="icon-button">{closeIcon}</span>
      Close
    </a>
  );
}
