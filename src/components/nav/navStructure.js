// import & set icons
import { AiOutlineGoogle as GoogleIco } from "react-icons/ai";
import { FaReact } from 'react-icons/fa';
import { FaRedhat } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdOutlineMenuBook as BookIcon } from 'react-icons/md';

// can use alias with 'as'
import React from 'react';
import shortid from 'shortid';

const reactIcon = React.createElement(FaReact, {});
const googleIcon = React.createElement(GoogleIco, {});
const plusIcon = React.createElement(AiOutlinePlus, {});

// menu structure
const navStructure = [
  {
    navItem: true,
    visible: true,
    icon: <BookIcon/>,
    text: 'Content',
    link: '/post/table-of-content',
    menu: null,
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
