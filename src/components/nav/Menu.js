import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BackItem } from './BackItem';
import { CloseItem } from './CloseItem';
import { MenuItem } from './MenuItem';
import { Context } from './_Nav';
import { CSSTransition } from 'react-transition-group';

// for height animation
function calcHeight(el) {
  if (!el) return
  const elCopy = el.cloneNode(true);
  elCopy.style.height = 'auto';
  elCopy.style.padding = '16px';
  document.body.before(elCopy);
  const height = elCopy.offsetHeight;
  elCopy.remove();
  return height;
}

export function Menu() {
  const context = useContext(Context);
  const {
    openedMenuState,
    closeMenu,
    navKeyboardHandler,
    menuTransitionState,
    prevMenuState,
    whereToSlidState,
  } = context;

  const ref = useRef();
  const [menuHeightState, setMenuHeightState] = useState(0);
  const [menuPaddingState, setMenuPaddingState] = useState(0);

  useEffect(() => {
    setMenuHeightState(calcHeight(ref.current) + 55);
    setMenuPaddingState('16px');

    window.addEventListener('keydown', navKeyboardHandler);
    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('keydown', navKeyboardHandler);
      window.removeEventListener('click', closeMenu);
    };
    
  }, [openedMenuState, navKeyboardHandler, closeMenu]);

  const isNestedMenu = openedMenuState?.prevMenu?.length > 0;

  return (
    <MenuContainer
      style={{ height: menuHeightState, padding: menuPaddingState }}
    >

      {isNestedMenu ? <BackItem /> : <CloseItem />}

      {/* we have 2 divs with transition where we keep previous and current menu items
      transitions is triggered via 'in' prop
      one div is mounted & another is unmounted after transition 
      one div enters, another exists */}
      <CSSTransition
        in={menuTransitionState}
        classNames={whereToSlidState}
        timeout={350}
        unmountOnExit
      >
        <div className={whereToSlidState} style={{position: 'absolute', right: '16px', left: '16px'}}  >
          {/* if transition enters, current menu renders
          if transition exists, pervious menu renders */}
          {menuTransitionState && openedMenuState.menuItems.map(menuItem => (
            <MenuItem menuItem={menuItem} key={menuItem.id} />
          ))}
          {!menuTransitionState && prevMenuState?.menuItems.map(menuItem => (
            <MenuItem menuItem={menuItem} key={menuItem.id} />
          ))}
        </div>
      </CSSTransition>

      <CSSTransition
        in={!menuTransitionState}
        classNames={whereToSlidState}
        timeout={350}
        unmountOnExit
      >
        <div className={whereToSlidState} style={{position: 'absolute', right: '16px', left: '16px'}}  >
          {!menuTransitionState && openedMenuState.menuItems.map(menuItem => (
            <MenuItem menuItem={menuItem} key={menuItem.id} />
          ))}
          {menuTransitionState && prevMenuState?.menuItems.map(menuItem => (
            <MenuItem menuItem={menuItem} key={menuItem.id} />
          ))}
        </div>
      </CSSTransition>

      {/* it is fake div to measure the height for animation */}
      <div style={{position: 'absolute', width:'90%', right: '1000px'}} ref={ref} >
        {openedMenuState.menuItems.map(menuItem => (
          <MenuItem menuItem={menuItem} key={menuItem.id} />
        ))}
      </div>
      
    </MenuContainer>
  );
}

export const MenuContainer = styled.div`
  position: absolute;
  top: 110%;
  width: 300px;
  background-color: #242526;

  border: 1px solid #474a4d;
  border-radius: 8px;
  padding: 16px;
  overflow: hidden;
  z-index: 666;
  transform: translateX(-45%);

  transition-property: height, padding-top;
  transition-duration: 0.35s;

  @media screen and (max-width: 480px) {
    transform: translateX(0px) !important;
    left: 10px;
    right: 10px;
    width: auto;
  }

  .forward-appear {
    transform: translateX(-150%);
  }
  .forward-appear-active {
    transform: translateX(0%);
    transition: all 350ms linear;
  }
  .forward-appear-done {
    transform: translateX(0%);
  }
  .forward-enter {
    transform: translateX(-150%);
  }
  .forward-enter-active {
    transform: translateX(0%);
    transition: all 350ms linear;
  }
  .forward-enter-done {
    transform: translateX(0%);
  }
  .forward-exit {
    transform: translateX(0%);
  }
  .forward-exit-active {
    transform: translateX(150%);
    transition: all 350ms linear;
  }
  .forward-exit-done {
    transform: translateX(150%);
  }


  .backward-appear {
    transform: translateX(150%);
  }
  .backward-appear-active {
    transform: translateX(0%);
    transition: all 350ms linear;
  }
  .backward-appear-done {
    transform: translateX(0%);
  }
  .backward-enter {
    transform: translateX(150%);
  }
  .backward-enter-active {
    transform: translateX(0%);
    transition: all 350ms linear;
  }
  .backward-enter-done {
    transform: translateX(0%);
  }
  .backward-exit {
    transform: translateX(0%);
  }
  .backward-exit-active {
    transform: translateX(-150%);
    transition: all 350ms linear;
  }
  .backward-exit-done {
    transform: translateX(-150%);
  }
`;