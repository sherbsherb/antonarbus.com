import React, { useContext } from 'react';
import styled from 'styled-components';
import { Menu } from './Menu';
import { Icon } from './Icon';
import { Link } from 'react-router-dom';

export const ContextNavItem = React.createContext(null);

// icons w/o text on the navbar
export function NavItem(props) {

  const { menuO } = props;
  const isLink = menuO.link;

  const [whereToSlidState, setWhereToSlidState] = React.useState('backward')
  const [showMenuState, setShowMenuState] = React.useState(false);
  const [openedMenuState, setOpenedMenuState] = React.useState(null);
  const [isTopMenuState, setIsTopMenuState] = React.useState(false);
  const [prevMenuState, setPrevMenuState] = React.useState(null);
  const [menuTransitionState, setMenuTransitionState] = React.useState(true)

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

  function closeMenu(e) {
    e?.stopPropagation();
    if (showMenuState) {
      setShowMenuState(false);
      setOpenedMenuState(null);
      setPrevMenuState(null)
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
    prevMenuState,
    setPrevMenuState,
    whereToSlidState,
    setWhereToSlidState,
    swapMenu,
  };

  // every li get its menuO from navStructure via props and we can open it on click event
  return (
    <ContextNavItem.Provider value={contextValue}>
      <Li>
        <Link
          to={menuO.link || '/'}
          onClick={e => {
            if (isLink) return;
            // if not a link, open menu
            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
            setWhereToSlidState('nowhere');
            showMenu(menuO);
          }}
        >
          {menuO.icon && <Icon>{menuO.icon}</Icon>}
          {menuO.text && <Text>{menuO.text}</Text>}
        </Link>

        {/* show only specific menu for navItemId, otherwise all existing menus are shown */}
        {showMenuState && openedMenuState?.navItemId === menuO.id && <Menu />}
      </Li>
    </ContextNavItem.Provider>
  );
}

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

const Text = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  color: grey;
`;
