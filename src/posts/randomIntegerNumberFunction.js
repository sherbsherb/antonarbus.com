import React, { useState } from 'react';

function Component() {
  const [state, setState] = useState(0);

  function randomNumFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  return (
    <>
      <button onClick={() => setState(randomNumFromTo(1, 1000))}>Get random integer</button>
      <div>Number from 1 to 1000: <b>{state}</b></div>
    </>
  );
}

const toRender = <Component />;

export const randomIntegerNumberFunction = {
  title: <>Random integer number function</>,
  date: '2021.10.19',
  tagsArr: ['function', 'vanilla', 'js', 'JavaScript'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Function returns integer number between values <i>from</i> & <i>to</i>.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function randomNumFromTo(from, to) {
          return Math.floor(Math.random() * (to - from + 1) + from);
        }
      `,
    },
    {
      type: 'text',
      val: 'Full code',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component() {
          const [state, setState] = useState(0);
        
          function randomNumFromTo(from, to) {
            return Math.floor(Math.random() * (to - from + 1) + from);
          }
        
          return (
            <>
              <button onClick={() => setState(randomNumFromTo(1, 1000))}>Get random integer</button>
              <div>Number from 1 to 1000: <b>{state}</b></div>
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
