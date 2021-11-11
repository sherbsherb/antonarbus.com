/* eslint-disable */

import React, { useMemo, useRef, useState } from 'react';
import { CodeSpan } from '../components/PostsFeed/components/CodeSpan';
import randomNumFromTo from '../helpers/functions/randomNumFromTo';

function Parent() {
  const [state, setState] = useState(false);
  const [oneOrTwoState, setOneOrTwoState] = useState(randomNumFromTo(1, 2));
  const ref = useRef(0);

  const funcWithInterruption = () => {
    // skip first render to avoid site load blocking
    if (ref.current === 0) return;
    alert('hi');
  };

  // returns memorized value only of val in dep array is changed 
  useMemo(funcWithInterruption, [oneOrTwoState]);
  ref.current++;

  return (
    <>
      <div>Rendered x<b>{ref.current}</b></div>
      <div>State: <b>{state.toString()}</b></div>
      <div>One or two: <b>{oneOrTwoState}</b></div>
      <div><i>'Hi'</i> message will pop only when number above changes</div>
      <button
        onClick={() => {
          setOneOrTwoState(randomNumFromTo(1, 2));
          setState(!state);
        }}
      >
        Update state
      </button>
    </>
  );
}

const toRender = <Parent />;

export const useMemoHook = {
  title: (
    <>
      <CodeSpan>useMemo()</CodeSpan> hook
    </>
  ),
  date: '2021.10.21',
  tagsArr: ['react', 'useMemo', 'hook', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>useMemo()</CodeSpan> caches the result returned from a
          function.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <i>useCallback</i> caches the provided function, but <br />
          <i>useMemo</i> invokes the provided function & caches the result
          value.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <i>useCallback</i> and <i>useMemo</i> both expect a function and an array of
          dependencies. <i>useCallback</i> returns its function
          when the dependencies change while <i>useMemo</i> calls its function and
          returns the result.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <i>useCallback</i> returns its function uncalled so you can call it later, 
          while <i>useMemo</i> calls its function and returns the result.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>useCallback(fn, deps)</CodeSpan> is equivalent to <CodeSpan>useMemo(() => fn, deps)</CodeSpan> 
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useMemo, useRef, useState } from 'react';
        import randomNumFromTo from '../helpers/functions/randomNumFromTo';

        function Parent() {
          const [state, setState] = useState(false);
          const [oneOrTwoState, setOneOrTwoState] = useState(randomNumFromTo(1, 2));
          const ref = useRef(0);

          const funcWithInterruption = () => {
            // skip first render to avoid site load blocking
            if (ref.current === 0) return;
            alert('hi');
          };

          // returns memorized value only of val in dep array is changed 
          useMemo(funcWithInterruption, [oneOrTwoState]);

          ref.current++;

          return (
            <>
              <div>Rendered x<b>{ref.current}</b></div>
              <div>State: <b>{state.toString()}</b></div>
              <div>One or two: <b>{oneOrTwoState}</b></div>
              <button
                onClick={() => {
                  setOneOrTwoState(randomNumFromTo(1, 2));
                  setState(!state);
                }}
              >
                Update state
              </button>
            </>
          );
        }

        const toRender = <Parent />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      val: (
        <ul>
          <li>We trigger the component render by the button click updating the <i>state</i></li>
          <li>On the same button we update another <i>state</i> which can randomly be 1 or 2</li>
          <li>In the component's function body we have the <CodeSpan>funcWithInterruption()</CodeSpan> which just alerts 'hi'</li>
          <li>We memoize it with <CodeSpan>useMemo(funcWithInterruption, [oneOrTwoState])</CodeSpan></li>
          <li>Memoized function will run only if <i>oneOrTwoState</i> state variable changes</li>
          <li>Click multiple times on the button and 'hi' shows up only in 50% of clicks</li>
        </ul> 
      ),
    },
  ],
};
