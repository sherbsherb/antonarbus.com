import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { CodeSpan } from '../components/CodeSpan';
import { Img } from '../components/Img';
import { Lnk } from '../components/Lnk';
import syncWait from '../../../helpers/functions/syncWait'

function Component1() {
  const [state, setState] = useState(false);
  const firstRender = useRef(true);
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    syncWait(2000);
    ref.current.innerHTML += '<div>useLayoutEffect triggered</div>';
  }, [state]);

  return (
    <>
      <div>
        State: <b>{state.toString()}</b>
      </div>
      <button onClick={() => setState(!state)}>Update state</button>
      <div ref={ref}></div>
    </>
  );
}

const toRender1 = <Component1 />;

function Component2() {
  const [state, setState] = useState(false);
  const firstRender = useRef(true);
  const ref = useRef(null);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    syncWait(2000);
    ref.current.innerHTML += '<div>useEffect triggered</div>';
  }, [state]);

  return (
    <>
      <div>
        State: <b>{state.toString()}</b>
      </div>
      <button onClick={() => setState(!state)}>Update state</button>
      <div ref={ref}></div>
    </>
  );
}

const toRender2 = <Component2 />;

export const useLayoutEffectHook = {
  title: (
    <>
      <CodeSpan>useLayoutEffect()</CodeSpan> hook
    </>
  ),
  date: '2021.10.22',
  tagsArr: ['react', 'useLayoutEffect', 'hook', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>useLayoutEffect()</CodeSpan> is similar to{' '}
          <CodeSpan>useEffect()</CodeSpan>, but it is triggered before DOM
          updates.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>We brought 2s delay before the message is printed from the hook.</>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Note that the <i>state</i> value is changed on the screen in 2s after{' '}
          <CodeSpan>useLayoutEffect()</CodeSpan> callback function is executed.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          That means that <CodeSpan>useLayoutEffect()</CodeSpan> happens before the DOM is rendered.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component1() {
          const [state, setState] = useState(false);
          const firstRender = useRef(true);
          const ref = useRef(null)
        
          useLayoutEffect(() => {
            if (firstRender.current) { firstRender.current = false; return; }
            syncWait(2000)
            ref.current.innerHTML += '<div>useLayoutEffect triggered</div>';
          }, [state])
        
          return (
            <>
              <div>State: <b>{state.toString()}</b></div>
              <button onClick={() => setState(!state)}>Update state</button>
              <div ref={ref}></div>
            </>
          );
        }
        
        const toRender1 = <Component1 />;
      `,
    },
    {
      type: 'output',
      val: toRender1,
    },
    {
      type: 'text',
      val: (
        <>
          With <CodeSpan>useEffect()</CodeSpan> the <i>state</i> value is changed and rendered on the screen,
          then the hook is triggered and in 2s we get the message.
        </>
      ),
    },
    {
      type: 'code',
      val: `
        function Component2() {
          const [state, setState] = useState(false);
          const firstRender = useRef(true);
          const ref = useRef(null);
        
          useEffect(() => {
            if (firstRender.current) {
              firstRender.current = false;
              return;
            }
            syncWait(2000);
            ref.current.innerHTML += '<div>useEffect triggered</div>';
          }, [state]);
        
          return (
            <>
              <div>
                State: <b>{state.toString()}</b>
              </div>
              <button onClick={() => setState(!state)}>Update state</button>
              <div ref={ref}></div>
            </>
          );
        }
        
        const toRender2 = <Component2 />;
      `,
    },
    {
      type: 'output',
      val: toRender2,
    },
    {
      type: 'text',
      val: <>
        We can see the hooks flow from <Lnk path={'https://github.com/donavon/hook-flow'}>Donavon West</Lnk>
        <Img path={'https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png'} width='500px'/>
      </>
    },
  ],
};
