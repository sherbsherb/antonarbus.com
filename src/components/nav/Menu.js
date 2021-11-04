// idea is taken from https://www.youtube.com/watch?v=IF6k0uZuypA
import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BackItem } from './BackItem';
import { CloseItem } from './CloseItem';
import { MenuItem } from './MenuItem';
import { Context } from './_Nav';
import { CSSTransition } from 'react-transition-group';

// calculate height of fake to manually set height to MenuContainer
// we need to manually control height for animation purpose
// unfortunately height: auto is not animated
function calcHeight(el) {
  if (!el) return
  const height = el.offsetHeight;
  return height + 85;
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
  
  useEffect(() => {
    setMenuHeightState(calcHeight(ref.current));

    window.addEventListener('keydown', navKeyboardHandler);
    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('keydown', navKeyboardHandler);
      window.removeEventListener('click', closeMenu);
    };
    
  }, [openedMenuState, navKeyboardHandler, closeMenu]);

  const isNestedMenu = openedMenuState?.prevMenu?.length > 0;
  const menuItemsDivStyle = { position: 'absolute', right: '0px', left: '0px', height: 'auto' }

  return (
    <MenuContainer
      style={{ height: menuHeightState }}
    >
      {isNestedMenu ? <BackItem /> : <CloseItem />}

      {/* 
      same principle as here 
      https://antonarbus.com/post/slide-sideways-with-csstransition

      we have 2 divs with transition 
      one div keeps previous menu items, another keeps current menu items
      one div enters, another exists with transition
      div is unmounted after transition (not necessary actually)
      transitions is triggered via 'in' prop 
      */}
      
      <CSSTransition
        in={menuTransitionState}
        classNames={whereToSlidState}
        timeout={350}
        unmountOnExit
      >
        <div className={whereToSlidState} style={menuItemsDivStyle} >
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
        <div className={whereToSlidState} style={menuItemsDivStyle}  >
          {!menuTransitionState && openedMenuState.menuItems.map(menuItem => (
            <MenuItem menuItem={menuItem} key={menuItem.id} />
          ))}
          {menuTransitionState && prevMenuState?.menuItems.map(menuItem => (
            <MenuItem menuItem={menuItem} key={menuItem.id} />
          ))}
        </div>
      </CSSTransition>

      {/* it is fake div to measure the height for animation */}
      <div style={{ position: 'absolute', right: '1000px'}} ref={ref} >
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
  overflow: hidden;
  z-index: 666;
  transform: translateX(-45%);

  transition-property: height;
  transition-duration: .35s;

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