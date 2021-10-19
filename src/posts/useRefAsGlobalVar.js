import React, { useRef, useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Link } from '../components/post/Link';

let renderCount = 0;

function Component() {
  const [state, setState] = useState(false);
  const ref = useRef(0);

  renderCount++;
  useRef(ref.current++);

  return (
    <div>
      <div>Render count by outer variable: <b>{renderCount}</b></div>
      <div>Render count by <i>useRef</i>: <b>{ref.current}</b></div>
      <button onClick={() => setState(!state)}>Change state to render</button>
    </div>
  );
}

const toRender = <Component />;

export const useRefAsGlobalVar = {
  title: (
    <>
      <CodeSpan>useRef()</CodeSpan> as a global variable
    </>
  ),
  date: '2021.10.19',
  tagsArr: ['useRef', 'hook', 'react'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Link path={'https://reactjs.org/docs/hooks-reference.html#useref'}>
            useRef
          </Link>{' '}
          returns a mutable ref object whose <i>.current</i> property is
          initialized to the passed argument <i>(initialValue)</i>. The returned
          object will persist for the full lifetime of the component.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        let renderCount = 0;
        
        function Component() {
          const [state, setState] = useState(false);
          const ref = useRef(0);
        
          renderCount++;
          ref.current = ref.current++;
        
          return (
            <div>
              <div>Render count by outer variable: <b>{renderCount}</b></div>
              <div>Render count by <i>useRef</i>: <b>{ref.current}</b></div>
              <button onClick={() => setState(!state)}>Change state to render</button>
            </div>
          );
        }
        
        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: (
        <>
          Even <CodeSpan>useRef()</CodeSpan> in initialized inside the component
          function it acts as a global variable.
        </>
      ),
    },
  ],
};
