import React from 'react';
import styled from 'styled-components';
import { Menu } from './Menu';
import { Icon } from './Icon';
import { Link } from 'react-router-dom';

export const ContextNavItem = React.createContext(null);

// icons w/o text on the navbar
export function NavItem(props) {
  const {menuO} = props;

  const [showMenuState, setShowMenuState] = React.useState(false);
  const [openedMenuState, setOpenedMenuState] = React.useState(null);

  function showMenu(o) {
      const menu = o.menu;
      setShowMenuState(true);
      setOpenedMenuState({
        ...menu,
        navItemId: o.id,
        prevMenu: [],
      });
  }

  const contextValue = {
    openedMenuState,
    setOpenedMenuState,
    showMenuState,
    setShowMenuState,
    showMenu,
    menuO
  };

  // every li get its menuO from navStructure via props and we can open it on click event
  return (
    <ContextNavItem.Provider value={contextValue}>
      <Li>
        <Link
          to={menuO.link || '/'}
          onClick={e => {
            const isLink = !!menuO.link;
            if (isLink) return;
            // if not a link, open menu
            e.preventDefault();
            e.nativeEvent.stopImmediatePropagation();
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
