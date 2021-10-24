// import & set icons
import { FaApple } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaRedhat } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
// can use alias with 'as'
import { IoClose } from 'react-icons/io5';
import React from 'react';
import shortid from 'shortid';

const appleIcon = React.createElement(FaApple, {});
const reactIcon = React.createElement(FaReact, {});
const redHatIcon = React.createElement(FaRedhat, {});
const plusIcon = React.createElement(AiOutlinePlus, {});
// can insert component as a JS variable instead of JSX tag
const closeIcon = React.createElement(IoClose, {});

// menu structure
const navStructure = [
  {
    navItem: true,
    visible: true,
    icon: <FaApple/>,
    text: '',
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
