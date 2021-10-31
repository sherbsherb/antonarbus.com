import React, { useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Lnk } from '../components/post/Lnk';

const btnCss = {
  padding: '5px 20px',
  margin: '10px 10px 0px 0px',
  cursor: 'pointer',
};

function Component() {
  return <>xxx</>;
}

const toRender = <Component />;

export const ReactTransitionGroup = {
  title: 'React Transition Group',
  date: '2021.11.01',
  tagsArr: ['react', 'animation'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Install{' '}
          <Lnk path="https://reactcommunity.org/react-transition-group/">
            library
          </Lnk>{' '}
          from{' '}
          <Lnk path="https://www.npmjs.com/package/react-transition-group">
            npm
          </Lnk>{' '}
          via termainal <CodeSpan>npm i react-transition-group</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      
      `,
    },

    {
      type: 'output',
      val: toRender,
    },
  ],
};
