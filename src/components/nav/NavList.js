import React, { useState } from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import navStructure from "./navStructure";

let isTopMenuItem = true;

export default function NavList() {
    // states
    const [openedMenuState, setOpenedMenuState] = useState(null);
    const [showMenuContainerState, setShowMenuContainerState] = useState(false);
  
    // update state to show menu
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
        isTopMenuItem = true;
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
  
    // update state to change menu
    function changeMenu(o) {
      // console.log('changeMenu() func fired');
  
      const isSubMenu = o.menu;
  
      if (!isSubMenu) {
        // console.log('no sub-menu');
        return;
      }
  
      // console.log('fall one level down in menu');
      isTopMenuItem = false;
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
        isTopMenuItem = false;
        setShowMenuContainerState(false);
        setOpenedMenuState(null);
        // console.log('closed existing menu');
      }
    }
  
    // assign previous menu obj from array to a state to re-render it
    function prevMenu(e) {
      // console.log('prevMenu() func fired');
  
      e?.stopPropagation();
      isTopMenuItem = false;
      setOpenedMenuState(openedMenuState.prevMenu.pop());
      // console.log('clicked Back');
    }
  
    // add actions for Escape, Backspace, Enter, Arrows
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
    
  return (
      <Ul>
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
                isTopMenuItem={isTopMenuItem}
                navKeyboardHandler={navKeyboardHandler}
                key={navO.id}
              />
            )
        )}
      </Ul>
  )
}

const Ul = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
`;