import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BackItem } from "./BackItem";
import { CloseItem } from "./CloseItem";
import { MenuItem } from "./MenuItem";

// menu with 'back' & 'close' buttons on top & MenuItems

export function Menu({
  openedMenuState,
  prevMenu,
  closeMenu,
  changeMenu,
  willOpenTopMenu,
  navKeyboardHandler
}) {

  function calcHeight(el) {
    const elCopy = el.cloneNode(true)
    document.body.before(elCopy)
    elCopy.style.height = 'auto'
    console.log(elCopy)
    const height = elCopy.offsetHeight;
    console.log(height)
    elCopy.remove()
    return height
  }

  const ref = useRef()
  const [menuHeight, setMenuHeight] = useState(null)
  

  useEffect(() => {
    window.addEventListener('keydown', navKeyboardHandler);
    window.addEventListener('click', closeMenu);
    setMenuHeight(calcHeight(ref.current))

    return () => { 
      window.removeEventListener('keydown', navKeyboardHandler);
      window.removeEventListener('click', closeMenu);
    };

  }, [openedMenuState]);

  const isNestedMenu = openedMenuState?.prevMenu?.length > 0;

  return (
    <MenuContainer 
    ref={ref}
    style={{height: menuHeight}}
    >
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

const slideDownAnimation = keyframes`
  from { transform: translateX(-45%); opacity: .85; }
  to { transform: translateX(-45%); opacity: 1; }
`;

const slideDownAnimationPhone = keyframes`
  from { opacity: .85 }
  to { opacity: 1 }
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

  animation-name: ${slideDownAnimation};
  animation-duration: .5s;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
  animation-fill-mode: forwards;
  transform-origin: top;

  transition: height .35s;

  @media screen and (max-width: 480px) {
    transform: translateX(0px) !important;
    left: 10px;
    right: 10px;
    width: auto;
    animation-name: ${slideDownAnimationPhone};
  }
`;