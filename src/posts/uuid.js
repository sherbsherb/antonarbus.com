import React from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Lnk } from '../components/post/Lnk';

import { v1 as uuidv1 } from 'uuid';
import { v4 as uuidv4 } from 'uuid';
import shortid from 'shortid';

function UuidExample() {
  return (
    <>
      <div>uuidv1(): <strong>{uuidv1()}</strong></div>
      <div>uuidv4(): <strong>{uuidv4()}</strong></div>
      <div>shortid(): <strong>{shortid()}</strong></div>
    </>
  )
}

const toRender = <UuidExample />

export const uuid = {
  title: <>uuid</>,
  date: '2021.10.07',
  tagsArr: ['react', 'npm', 'uuid', 'id', 'shortid'],
  postParts: [
    {
      type: 'text',
      val: <>
        We often need to generate a unique string as a universally unique identifier (UUID).<br/><br/>
        We may just type some random string from the keyboard 
        <CodeSpan>Ada78Gfh</CodeSpan> or dynamically generate it via <CodeSpan>Math.random().toString()</CodeSpan>
      </>
    }, 
    {
      type: 'text',
      val: <>
        But a better way to use libraries, such as <Lnk link={'https://www.npmjs.com/package/shortid'}>shortid</Lnk> {' '}
        or <Lnk link={'https://www.npmjs.com/package/uuid'}>uuid</Lnk> packages from npm.
      </>,
    },
    {
      type: 'text',
      val: <>
        Install a package via npm in your terminal <CodeSpan>npm i uuid</CodeSpan> or <CodeSpan>npm i shortid</CodeSpan>
      </>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import { v1 as uuidv1 } from 'uuid';
        import { v4 as uuidv4 } from 'uuid';
        import shortid from 'shortid';
        
        function UuidExample() {
          return (
            <>
              <div>uuidv1(): <strong>{uuidv1()}</strong></div>
              <div>uuidv4(): <strong>{uuidv4()}</strong></div>
              <div>shortid(): <strong>{shortid()}</strong></div>
            </>
          )
        }

        const toRender = <UuidExample />
      `
    },
    {
      type: 'output',
      val: toRender
    },
  ],
};
