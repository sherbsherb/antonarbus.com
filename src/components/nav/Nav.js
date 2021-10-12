// ! how to make similar hamburger, which dynamically pop up when there is no space
// ! we can not grab an el with querySelector as we do in native JS

import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
// import styled components
import {
  NavStyled,
  NavItemStyled,
  Icon,
  NavItemLi,
  MenuContainer,
  MenuLink,
  MenuIcon,
  MenuIconRight,
  MenuText,
  BackLink,
  CloseLink,
} from './NavStyledComponents';
//import './nav.css';

// import & set icons
import { FaApple } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaRedhat } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaChevronRight as RightArrowIcon } from 'react-icons/fa';
// can use alias with 'as'
import { FaChevronLeft as LeftArrowIcon } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const appleIcon = React.createElement(FaApple, {});
const reactIcon = React.createElement(FaReact, {});
const redHatIcon = React.createElement(FaRedhat, {});
const plusIcon = React.createElement(AiOutlinePlus, {});
// can insert component as a JS variable instead of JSX tag
const closeIcon = React.createElement(IoClose, {});

// menu structure
const navContent = [
  {
    navItem: true,
    visible: true,
    icon: appleIcon,
    text: '',
    menu: null,
    id: shortid.generate(),
  },
  {
    navItem: true,
    visible: true,
    icon: reactIcon,
    text: '',
    menu: null,
    id: shortid.generate(),
  },
  {
    navItem: true,
    visible: true,
    icon: redHatIcon,
    text: '',
    menu: {
      visible: false,
      menuItems: [
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid.generate(),
        },
        {
          text: 'text',
          iconLeft: '',
          menu: null,
          id: shortid.generate(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid.generate(),
        },
      ],
    },
    id: shortid.generate(),
  },
  {
    navItem: true,
    visible: true,
    icon: plusIcon,
    text: '',
    menu: {
      visible: true,
      menuItems: [
        {
          text: 'text',
          iconLeft: '😇',
          menu: {
            visible: false,
            menuItems: [
              {
                text: 'text',
                iconLeft: '😎',
                menu: null,
                id: shortid.generate(),
              },
              {
                text: 'text',
                iconLeft: '😎',
                menu: null,
                id: shortid.generate(),
              },
              {
                text: 'text',
                iconLeft: '😎',
                menu: {
                  visible: false,
                  menuItems: [
                    {
                      text: 'long long long long long long long long text',
                      iconLeft: '🥸',
                      menu: null,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text',
                      iconLeft: '🥸',
                      menu: null,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text',
                      iconLeft: '🥸',
                      menu: null,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text',
                      iconLeft: '🥸',
                      menu: null,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text',
                      iconLeft: '🥸',
                      menu: null,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text',
                      iconLeft: '🥸',
                      menu: null,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text',
                      iconLeft: '🥸',
                      menu: null,
                      id: shortid.generate(),
                    },
                  ],
                },
                id: shortid.generate(),
              },
            ],
          },
          id: shortid.generate(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid.generate(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid.generate(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid.generate(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid.generate(),
        },
      ],
    },
    id: shortid.generate(),
  },
];

// var
let willOpenTopMenu = true;

// navbar
export function NavBar() {
  // states
  const [openedMenuState, setOpenedMenuState] = useState(null);
  const [showMenuContainerState, setShowMenuContainerState] = useState(false);

  //#region HELPER FUNCS

  // ! helper funcs are in the top component
  // ! wish to move them up, but they use 'state'
  // ! but 'state' can be created only inside a component

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
    // console.log('navKeyboardHandler() func fired');

    const { key } = e;
    //// console.log(keyCode);
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

  // console.log('NavBar rendered');
  return (
    // ? we throw props over & over again, is there more elegant way?
    <NavStyled>
      <NavItemStyled>
        {navContent.map(
          navObj =>
            navObj.visible && (
              <NavItem
                navObj={navObj}
                openedMenuState={openedMenuState}
                prevMenu={prevMenu}
                closeMenu={closeMenu}
                showMenu={showMenu}
                changeMenu={changeMenu}
                showMenuContainerState={showMenuContainerState}
                willOpenTopMenu={willOpenTopMenu}
                key={navObj.id}
              />
            )
        )}
      </NavItemStyled>
    </NavStyled>
  );
}

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
          />
        )}
    </NavItemLi>
  );
}

// menu with 'back' & 'close' buttons on top & MenuItems
export function Menu({
  openedMenuState,
  prevMenu,
  closeMenu,
  changeMenu,
  willOpenTopMenu,
}) {
  // ! every time we press item inside MenuContainer
  // ! we update the openedMenuState with changeMenu() func
  // ! changeMenu() func updates openedMenuState, which triggers re-render
  // ! ... and we should get new MenuContainer, but no!!!
  // ! if we color els in dev tool we can see els are not touched
  // ! how come?
  // console.log('Menu rendered');
  const isNestedMenu = openedMenuState?.prevMenu?.length > 0;
  return (
    <MenuContainer>
      {isNestedMenu && <BackItem prevMenu={prevMenu} />}
      {!isNestedMenu && <CloseItem closeMenu={closeMenu} />}
      {openedMenuState.menuItems.map(menuItem => (
        <MenuItem
          menuItem={menuItem}
          changeMenu={changeMenu}
          key={menuItem.id}
          willOpenTopMenu={willOpenTopMenu}
        />
      ))}
    </MenuContainer>
  );
}

// ! MenuContainer width: auto
// ! want to apply transition, which requires fixed width
// ! such manipulations are done by JS, but how to grab an element in React?

// item inside menu
export function MenuItem({ menuItem, changeMenu, willOpenTopMenu }) {
  // console.log('MenuItem rendered');
  const subMenuExists = menuItem.menu;
  return (
    <MenuLink
      href="#1"
      willOpenTopMenu={willOpenTopMenu}
      onClick={e => {
        e?.stopPropagation();
        changeMenu(menuItem);
      }}
    >
      <span className="left-part">
        <Icon>{menuItem.iconLeft}</Icon>
        <MenuText>{menuItem.text}</MenuText>
      </span>

      {subMenuExists && (
        <span className="right-part">
          <MenuIconRight>
            <RightArrowIcon />
          </MenuIconRight>
        </span>
      )}
    </MenuLink>
  );
}

export function BackItem({ prevMenu }) {
  // console.log('BackItem rendered');
  return (
    <BackLink href="#1" onClick={prevMenu}>
      <span className="left-part">
        <MenuIcon>
          <LeftArrowIcon />
        </MenuIcon>
        <MenuText>Back</MenuText>
      </span>
    </BackLink>
  );
}

export function CloseItem({ closeMenu }) {
  // console.log('CloseItem rendered');
  return (
    <CloseLink href="#1" onClick={closeMenu}>
      <span className="left-part">
        <MenuIcon>{closeIcon}</MenuIcon>
        <MenuText>Close</MenuText>
      </span>
    </CloseLink>
  );
}
