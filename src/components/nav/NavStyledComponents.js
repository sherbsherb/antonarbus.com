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
  position: relative;
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

const slideDownAnimationPhone = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 110%;
  width: 300px;
  /* width: auto; */
  background-color: ${bg};
  border: ${border};
  border-radius: ${borderRadius};
  padding: 1rem;
  overflow: hidden;
  z-index: 666;

  animation-name: ${slideDownAnimation};
  animation-duration: 500ms;
  animation-delay: 0ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
  animation-fill-mode: forwards;
  transform-origin: top;

  @media screen and (max-width: 480px) {
    transform: translateX(0px) !important;
    left: 10px;
    right: 10px;
    width: auto;
    animation-name: ${slideDownAnimationPhone};
  }
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
  color: ${props => props.color};
  animation: ${props =>
    // @ts-ignore
    props.willOpenTopMenu
      ? css`none`
      : css`${appearAnimation} 200ms cubic-bezier(0, 1, 0.5, 1)`
  };

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
