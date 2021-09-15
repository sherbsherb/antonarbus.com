import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import { NavBar } from './components/nav/Nav.js';
import shortid from 'shortid';

import {TopContainer, Main} from './components/nav/NavStyledComponents'

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
          text: 'text1',
          iconLeft: '😇',
          menu: false,
          id: shortid.generate(),
        },
        {
          text: 'text2',
          iconLeft: '😇',
          menu: false,
          id: shortid.generate(),
        },
        {
          text: 'text3',
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
          text: 'text5',
          iconLeft: '😇',
          menu: {
            visible: false,
            menuItems: [
              {
                text: 'text6',
                iconLeft: '😎',
                menu: false,
                id: shortid.generate(),
              },
              {
                text: 'text7',
                iconLeft: '😎',
                menu: false,
                id: shortid.generate(),
              },
              {
                text: 'text8',
                iconLeft: '😎',
                menu: {
                  visible: false,
                  menuItems: [
                    {
                      text: 'text999999999',
                      iconLeft: '🥸',
                      menu: false,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text10',
                      iconLeft: '🥸',
                      menu: false,
                      id: shortid.generate(),
                    },
                    {
                      text: 'text11',
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
          text: 'text12',
          iconLeft: '😇',
          menu: false,
          id: shortid.generate(),
        },
      ],
    },
    id: shortid.generate(),
  },
];

function App() {
  const [openedMenuState, setOpenedMenuState] = useState(null);

  return (
    <TopContainer>
      <NavBar
        navContent={navContent}
        openedMenuState={openedMenuState}
        setOpenedMenuState={setOpenedMenuState}
      />
      <Main>
        <p>First React website for Anton</p>
      </Main>
    </TopContainer>
  );
}

export default App;
