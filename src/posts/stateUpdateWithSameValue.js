import React, { useRef, useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Lnk } from '../components/post/Lnk';

function Component() {
  const [state, setState] = useState(0);
  const ref = useRef();
  if (!!ref.current) ref.current.innerHTML += '<span>Render triggered </span>';
  return (
    <div>
      <h5>{new Date().toString()}</h5>
      <button onClick={() => setState(state + 1)}>
        Update state with new value
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => setState(state)}>
        Update state with same value
      </button>
      <div ref={ref}></div>
    </div>
  );
}

const toRender = <Component />;

export const stateUpdateWithSameValue = {
  title: 'State update with same value',
  date: '2021.10.12',
  tagsArr: ['react', 'component', 'useState', 'hook', 'render', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          If state is set to the same value via{' '}
          <CodeSpan>setState(sameVal)</CodeSpan> nothing happens, component
          function is not even triggered.
        </>
      ),
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
      val: (
        <>
          Note that the component function is oddly triggered one extra time
          after assigning the same state value, no clue why. <br />
          <br />
          According to the{' '}
          <Lnk path={'https://github.com/facebook/react/issues/17474'}>
            React Github
          </Lnk>{' '}
          that is the known thing.
        </>
      ),
    },
  ],
};
