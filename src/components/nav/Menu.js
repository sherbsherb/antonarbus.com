import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { BackItem } from './BackItem';
import { CloseItem } from './CloseItem';
import { MenuItem } from './MenuItem';
import { Context } from './_Nav';

// for height animation
function calcHeight(el) {
  const elCopy = el.cloneNode(true);
  elCopy.style.height = 'auto';
  elCopy.style.padding = '1rem';
  document.body.before(elCopy);
  const height = elCopy.offsetHeight;
  elCopy.remove();
  return height;
}

export function Menu() {
  const context = useContext(Context);
  const { openedMenuState, closeMenu, navKeyboardHandler } = context;

  const ref = useRef();
  const [menuHeightState, setMenuHeightState] = useState(0);
  const [menuPaddingState, setMenuPaddingState] = useState(0);

  useEffect(() => {
    window.addEventListener('keydown', navKeyboardHandler);
    window.addEventListener('click', closeMenu);
    setMenuHeightState(calcHeight(ref.current));
    setMenuPaddingState('1rem');

    return () => {
      window.removeEventListener('keydown', navKeyboardHandler);
      window.removeEventListener('click', closeMenu);
    };
  }, [openedMenuState]);

  const isNestedMenu = openedMenuState?.prevMenu?.length > 0;

  return (
    <MenuContainer
      ref={ref}
      style={{ height: menuHeightState, padding: menuPaddingState }}
    >
      {isNestedMenu ? <BackItem /> : <CloseItem />}
      {openedMenuState.menuItems.map(menuItem => (
        <MenuItem menuItem={menuItem} key={menuItem.id} />
      ))}
    </MenuContainer>
  );
}

const slideDownAnimation = keyframes`
  from { opacity: .85; }
  to { opacity: 1; }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 110%;
  width: 300px;
  background-color: #242526;

  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  z-index: 666;
  transform: translateX(-45%);

  animation-name: ${slideDownAnimation};
  animation-duration: 0.5s;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
  animation-fill-mode: forwards;
  transform-origin: top;

  transition-property: height, padding;
  transition-duration: 0.35s;

  @media screen and (max-width: 480px) {
    transform: translateX(0px) !important;
    left: 10px;
    right: 10px;
    width: auto;
  }
`;
