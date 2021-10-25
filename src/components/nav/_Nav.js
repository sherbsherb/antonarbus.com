import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';

export function Nav() {
  // console.log('Nav rendered');
  
  return (
    <NavStyled>
      {/* <Logo /> */}
      <NavList />
      {/* <Hamburger /> */}
    </NavStyled>
  );
}

const navSize = '60px';

const NavStyled = styled.nav`
  height: ${navSize};
  padding: 0 1rem;
  border-bottom: 1px solid #474a4d;
  position: relative;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
`;