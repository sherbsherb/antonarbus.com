import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import { NavBar } from './components/nav/Nav.js';
import shortid from 'shortid';

import { FaApple } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaRedhat } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';

const appleIcon = React.createElement(FaApple, {});
const reactIcon = React.createElement(FaReact, {});
const redHatIcon = React.createElement(FaRedhat, {});
const plusIcon = React.createElement(AiOutlinePlus, {});

const navContent = [
  {
    navItem: true,
    visible: true,
    icon: appleIcon,
    text: '',
    menu: false,
    id: shortid.generate(),
  },
  {
    navItem: true,
    visible: true,
    icon: reactIcon,
    text: '',
    menu: false,
    id: shortid.generate(),
  },
  {
    navItem: true,
    visible: true,
    icon: redHatIcon,
    text: '',
    menu: {
      visible: false,
      menuItems: [
        {
          text: 'text: ' + shortid.generate(),
          iconLeft: '😇',
          menu: false,
          id: shortid.generate(),
        },
        {
          text: 'text: ' + shortid.generate(),
          iconLeft: '😇',
          menu: false,
          id: shortid.generate(),
        },
        {
          text: 'text: ' + shortid.generate(),
          iconLeft: '😇',
          menu: false,
          id: shortid.generate(),
        },
      ],
    },
    id: shortid.generate(),
  },
  {
    navItem: true,
    visible: true,
    icon: plusIcon,
    text: '',
    menu: {
      visible: true,
      menuItems: [
        {
          text: 'text: ' + shortid.generate(),
          iconLeft: '😇',
          menu: false,
          id: shortid.generate(),
        },
        {
          text: 'text: ' + shortid.generate(),
          iconLeft: '😇',
          menu: {
            visible: false,
            menuItems: [
              {
                text: 'text: ' + shortid.generate(),
                iconLeft: '😎',
                menu: false,
                id: shortid.generate(),
              },
              {
                text: 'text: ' + shortid.generate(),
                iconLeft: '😎',
                menu: false,
                id: shortid.generate(),
              },
              {
                text: 'text: ' + shortid.generate(),
                iconLeft: '😎',
                menu: {
                  visible: false,
                  menuItems: [
                    {
                      text: 'text: ' + shortid.generate(),
                      iconLeft: '🥸',
                      menu: false,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text: ' + shortid.generate(),
                      iconLeft: '🥸',
                      menu: false,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text: ' + shortid.generate(),
                      iconLeft: '🥸',
                      menu: false,
                      id: shortid.generate(),
                    },
                  ],
                },
                id: shortid.generate(),
              },
            ],
          },
          id: shortid.generate(),
        },
        {
          text: 'text: ' + shortid.generate(),
          iconLeft: '😇',
          menu: false,
          id: shortid.generate(),
        },
      ],
    },
    id: shortid.generate(),
  },
];

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const Window = styled.div`
  text-align: center;
  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: whitesmoke;
  ${'' /* max-width: 600px; */}
`;

function App() {
  const [openedMenuState, setOpenedMenuState] = useState(null);

  return (
    <Window>
      <NavBar
        navContent={navContent}
        openedMenuState={openedMenuState}
        setOpenedMenuState={setOpenedMenuState}
      />
      <Main>
        <p>First React website for Anton</p>
      </Main>
    </Window>
  );
}

export default App;
