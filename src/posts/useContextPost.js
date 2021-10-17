import React, { useEffect, useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Link } from '../components/post/Link';
import axios from 'axios';
const style = { width: '20px', margin: '0px 10px' };

function Component() {
  const [inputVal1, setInputVal1] = useState('1');
  const [inputVal2, setInputVal2] = useState('2');
  const [title1, setTitle1] = useState('title1');
  const [title2, setTitle2] = useState('title2');

  return <div></div>;
}

const toRender = <Component />;

export const useContextPost = {
  title: (
    <>
      <CodeSpan>useContext()</CodeSpan> hook
    </>
  ),
  date: '2021.10.17',
  tagsArr: ['react', 'useContext', 'hook', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Link
            path={'https://reactjs.org/docs/hooks-reference.html#usecontext'}
          >
            useContext
          </Link>{' '}
          provides a way to pass data through the component tree without having
          to pass props & states manually.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          With <i>Fetch</i> GET request we get response and then with built-in
          method convert it into text or json. <br />
          <br />
          <i>Axios</i> does not have intermediate step and we immediately have
          an access to data.
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
