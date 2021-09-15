import styled from 'styled-components';

// CSS const
const bg = '#242526';
const textColor = '#dadce1';
const navSize = '60px';
const border = '1px solid #474a4d';
const borderRadius = '8px';

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

export const MenuContainer = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: ${bg};
  border: ${border};
  border-radius: ${borderRadius};
  padding: 1rem;
  overflow: hidden;
  z-index: 666;
`;

export const MenuLink = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: ${borderRadius};
  padding: 0.5rem;
  color: ${textColor};

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
  margin-left: auto;
  background-color: transparent;
`;

export const MenuText = styled.span`
  margin-left: 10px;
`;

export const BackLink = styled(MenuLink)``;

export const CloseLink = styled(MenuLink)``;