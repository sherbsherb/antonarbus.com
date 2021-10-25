import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { NavItem } from './NavItem';
import navStructure from './navStructure';
import { Context } from './_Nav';

export default function NavList() {
  const context = useContext(Context);
  console.log(context);

  return (
    <Ul>
      {navStructure.map(
        navO => navO.visible && <NavItem navO={navO} key={navO.id} />
      )}
    </Ul>
  );
}

const Ul = styled.ul`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0;
  padding: 0;
`;
