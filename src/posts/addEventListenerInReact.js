import React, { useEffect, useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';

function Component() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMouseCords(e) {
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(() => {
    document.addEventListener('mousemove', logMouseCords);
    console.log('event listener has been added only ones');
    // clean code on component unmount
    return () => document.removeEventListener('mousemove', logMouseCords);
  }, []);

  return (
    <>
      <div>
        xCord: <b>{x}</b>
      </div>
      <div>
        yCord: <b>{y}</b>
      </div>
    </>
  );
}

const toRender = <Component />;

export const addEventListenerInReact = {
  title: (
    <>
      <CodeSpan>addEventListener()</CodeSpan> in React?
    </>
  ),
  date: '2021.10.15',
  tagsArr: ['react', 'useEffect', 'hook', 'addEventListener'],
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
      type: 'text',
      val: (
        <>
          We can attach <CodeSpan>addEventListener()</CodeSpan> in a{' '}
          <CodeSpan>useEffect(func, [])</CodeSpan> function on initial component
          render.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component() {
          const [x, setX] = useState(0)
          const [y, setY] = useState(0)
        
          function logMouseCords(e) {
            setX(e.clientX)
            setY(e.clientY)
          }
        
          useEffect(() => {
            document.addEventListener('mousemove', logMouseCords);
            console.log('event listener has been added only ones')
          }, []);
        
          return (
            <>
              <div>xCord: <b>{x}</b></div>
              <div>yCord: <b>{y}</b></div>
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
