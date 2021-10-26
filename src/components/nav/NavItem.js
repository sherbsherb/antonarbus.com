import React, { useContext } from 'react';
import styled from 'styled-components';
import { Menu } from './Menu';
import { Icon } from './Icon';
import { Context } from './_Nav';

// icons w/o text on the navbar
export function NavItem(props) {
  const context = useContext(Context);
  const { openedMenuState, showMenu, showMenuState } = context;
  const { menuO } = props;

  // every li get its menuO from navStructure via props and we can open it on click event
  return (
    <Li>
      <Link
        href=""
        onClick={e => {
          e.preventDefault()
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
  );
}

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
`;

const Link = styled.a`
  display: flex;
  align-items: center;

  &:hover {
    filter: brightness(1.2);
  }
`;

const Text = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  color: grey;
`;
