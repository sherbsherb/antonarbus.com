import React from 'react';
import styled from 'styled-components';
import { CodeSpan } from '../components/post/CodeSpan';
import { Tag } from '../components/post/Tag';

function Component() {


  return (
    <Div>
      <a href="www.google.com" style={{ all: "revert"}}>google.com</a>

    </Div>
  );
}

const Div = styled.div `

`

const toRender = <Component />;

export const linkDecoration = {
  title: 'Link decoration',
  date: '2021.11.03',
  tagsArr: ['css'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          How to <CodeSpan>addEventListener()</CodeSpan> in React?
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
