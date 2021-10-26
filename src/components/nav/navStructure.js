// import & set icons
import { FaApple } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaRedhat } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
// can use alias with 'as'
import React from 'react';
import shortid from 'shortid';

const reactIcon = React.createElement(FaReact, {});
const redHatIcon = React.createElement(FaRedhat, {});
const plusIcon = React.createElement(AiOutlinePlus, {});

// menu structure
const navStructure = [
  {
    navItem: true,
    visible: true,
    icon: <FaApple/>,
    text: 'apple',
    menu: null,
    id: shortid(),
  },
  {
    navItem: true,
    visible: true,
    icon: reactIcon,
    text: '',
    menu: null,
    id: shortid(),
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
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid(),
        },
        {
          text: 'text',
          iconLeft: '',
          menu: null,
          id: shortid(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid(),
        },
      ],
    },
    id: shortid(),
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
          text: 'text',
          iconLeft: '😇',
          menu: {
            visible: false,
            menuItems: [
              {
                text: 'text',
                iconLeft: '😎',
                menu: null,
                id: shortid(),
              },
              {
                text: 'text',
                iconLeft: '😎',
                menu: null,
                id: shortid(),
              },
              {
                text: 'text',
                iconLeft: '😎',
                menu: {
                  visible: false,
                  menuItems: [
                    {
                      text: 'long long long long long long long long text',
                      iconLeft: reactIcon,
                      menu: null,
                      id: shortid(),
                    },
                    {
                      text: 'text',
                      iconLeft: reactIcon,
                      menu: null,
                      id: shortid(),
                    },
                    {
                      text: 'text',
                      iconLeft: reactIcon,
                      menu: null,
                      id: shortid(),
                    },
                    {
                      text: 'text',
                      iconLeft: reactIcon,
                      menu: null,
                      id: shortid(),
                    },
                    {
                      text: 'text',
                      iconLeft: reactIcon,
                      menu: null,
                      id: shortid(),
                    },
                    {
                      text: 'text',
                      iconLeft: reactIcon,
                      menu: null,
                      id: shortid(),
                    },
                    {
                      text: 'text',
                      iconLeft: reactIcon,
                      menu: null,
                      id: shortid(),
                    },
                  ],
                },
                id: shortid(),
              },
            ],
          },
          id: shortid(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid(),
        },
        {
          text: 'text',
          iconLeft: '😇',
          menu: null,
          id: shortid(),
        },
      ],
    },
    id: shortid(),
  },
];

export default navStructure;
