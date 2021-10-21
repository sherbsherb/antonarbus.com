import React from 'react';
import { CodeSpan } from '../components/post/CodeSpan';

function Component() {

  const syncWait = ms => {
    const end = Date.now() + ms
    while (Date.now() < end) continue
  }

  const sayHiWithDelay = () => {
    syncWait(2000);
    alert('hi');
  };

  return (
    <>
      <button onClick={sayHiWithDelay}>Say 'hi' with delay</button>
    </>
  );
}

const toRender = <Component />;

export const synchronousDelayFunc = {
  title: (
    <>
      Synchronous delay function
    </>
  ),
  date: '2021.10.21',
  tagsArr: ['JS', 'javascript', 'vanilla', 'function'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Simple delay function
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const syncWait = ms => {
          const end = Date.now() + ms
          while (Date.now() < end) continue
        }
      `,
    },
    {
      type: 'text',
      val: 'Whole component',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component() {

          const syncWait = ms => {
            const end = Date.now() + ms
            while (Date.now() < end) continue
          }

          const sayHiWithDelay = () => {
            syncWait(2000);
            alert('hi');
          };

          return (
            <>
              <button onClick={sayHiWithDelay}>Say 'hi' with delay</button>
            </>
          );
        }

        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
