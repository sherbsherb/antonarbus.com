import React, { useRef, useState } from 'react';
import { Link } from '../components/post/Link';

function Component() {
  const [state, setState] = useState(0);
  const ref = useRef();
  if (!!ref.current) ref.current.innerHTML += '<span>Render triggered </span>';
  return (
    <div>
      <h5>{new Date().toString()}</h5>
      <button onClick={() => setState(state + 1)}>Update state with new value</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => setState(state)}>Update state with same value</button>
      <div ref={ref}></div>
    </div>
  );
}

const toRender = <Component />;

export const stateUpdate = {
  title: 'State update with same value',
  date: '2021.10.12',
  tagsArr: ['react', 'component', 'useState', 'hook', 'render', 'basics'],
  postParts: [
    {
      type: 'text',
      val: 'Nothing happens, component function is not even triggered.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component() {
          const [state, setState] = useState(0);
          const ref = useRef();
          if (!!ref.current) ref.current.innerHTML += '<span>Render triggered </span>';
          return (
            <div>
              <h5>{new Date().toString()}</h5>
              <button onClick={() => setState(state + 1)}>Update state with new value</button>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => setState(state)}>Update state with same value</button>
              <div ref={ref}></div>
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
      val: <>
        Note that the component function is oddly triggered one extra time after assigning the same state value, no clue why. <br /><br />
        According to the <Link path={'https://github.com/facebook/react/issues/17474'}>React Github</Link> that is the known thing.
      </>
    }
  ],
};

