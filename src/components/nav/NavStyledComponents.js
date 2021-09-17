import styled, { keyframes, css } from 'styled-components';

//#region CSS const

const bg = '#242526';
const textColor = '#dadce1';
const navSize = '60px';
const border = '1px solid #474a4d';
const borderRadius = '8px';

//#endregion

export const TopContainer = styled.div`
  text-align: center;
  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: whitesmoke;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const NavStyled = styled.nav`
  height: ${navSize};
  background-color: ${bg};
  padding: 0 1rem;
  border-bottom: ${border};
`;

export const NavItemStyled = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;

  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Icon = styled.a`
  width: ${parseInt(navSize) * 0.5}px;
  height: ${parseInt(navSize) * 0.5}px;
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  color: ${textColor};

  svg {
    fill: ${textColor};
    width: 20px;
    height: 20px;
    margin-top: 1px;
  }

  &:hover {
    filter: brightness(1.2);
  }
`;

export const NavItemLi = styled.li`
  width: ${parseInt(navSize) * 0.8}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const slideDownAnimation = keyframes`
  from {
    transform: scaleY(0) translateX(-45%);
  }
  to {
    transform: scaleY(1) translateX(-45%);
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  background-color: ${bg};
  border: ${border};
  border-radius: ${borderRadius};
  padding: 1rem;
  overflow: hidden;
  z-index: 666;
  animation: ${slideDownAnimation} 200ms linear forwards;
  transform-origin: 0 0;
`;

const appearAnimation = keyframes`
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
`;

// todo: use props to animate only nested menu
// todo: do not animate close & back
export const MenuLink = styled.a`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: ${borderRadius};
  padding: 0.5rem;
  color: ${textColor};
  white-space: nowrap;
  /* animation: ${appearAnimation} 200ms linear; */
  color: ${(props) => props.color};
  animation: ${(props) =>
    props.willOpenTopMenu
      ? css`none`
      : css`${appearAnimation} 200ms linear`};

  .left-part {
    width: auto;
    display: inline-flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
  }

  .right-part {
    margin-left: 40px;
  }

  &:hover {
    background-color: #525357;
  }
`;

export const MenuIcon = styled(Icon)`
  &:hover {
    filter: none;
  }
`;

export const MenuIconRight = styled(Icon)`
  background-color: transparent;
  margin-right: -5px;
`;

export const MenuText = styled.span`
  margin-left: 10px;
`;

export const BackLink = styled(MenuLink)`
  color: #858383;
  animation: none;
`;

export const CloseLink = styled(MenuLink)`
  color: #858383;
  animation: none;
`;
