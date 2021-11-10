/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { CodeSpan } from '../components/Post/CodeSpan';

let toggle = true;

function Component() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  const [useEffectNoDep, setUseEffectNoDep] = useState(0);
  const [useEffectEmptyArrDep, setUseEffectEmptyArrDep] = useState(0);
  const [useEffectStateDep, setUseEffectStateDep] = useState(0);
  const [useEffectStatesDep, setUseEffectStatesDep] = useState(0);

  // run only ones on initial load
  useEffect(() => {
    setUseEffectEmptyArrDep(prevVal => prevVal + 1);
  }, []);

  // runs only if state is changed
  useEffect(() => {
    setUseEffectStateDep(prevVal => prevVal + 1);
  }, [state1]);

  // runs if state & anotherState are changed
  useEffect(() => {
    setUseEffectStatesDep(prevVal => prevVal + 1);
  }, [state1, state2]);

  useEffect(() => {
    // use effect without dependencies with state modification causes infinite loop
    // state upd --> render --> useEffect --> state upd --> render --> etc...
    // let's bring a flag & toggle it to avoid the loop
    // that is just my hack to demonstrate useEffect without dependencies
    if (!toggle) {
      toggle = !toggle;
      return;
    }
    setUseEffectNoDep(prevVal => prevVal + 1);
    toggle = !toggle;
  });

  return (
    <div>
      <div>
        useEffect(...) <b>{useEffectNoDep}</b>
      </div>
      <div>
        useEffect(..., []) <b>{useEffectEmptyArrDep}</b>
      </div>
      <div>
        useEffect(..., [state1]) <b>{useEffectStateDep}</b>
      </div>
      <div>
        useEffect(..., [state1, state2]) <b>{useEffectStatesDep}</b>
      </div>
      <br />
      <hr />
      <br />
      <h3>state1: {state1}</h3>
      <button onClick={() => setState1(state1 + 1)}>+ 1</button>
      <h3>state2: {state2}</h3>
      <button onClick={() => setState2(state2 + 1)}>+ 1</button>
    </div>
  );
}

const toRender = <Component />;

export const useEffectPost = {
  title: (
    <>
      <CodeSpan>useEffect()</CodeSpan> hook
    </>
  ),
  date: '2021.10.15',
  tagsArr: ['react', 'useEffect', 'hook'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>useEffect()</CodeSpan> excludes its function from the
          component and runs it after the render.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>useEffect(func, [prop || state])</CodeSpan> hook may run a
          function after:
        </>
      ),
    },
    {
      type: '',
      val: (
        <ul>
          <li>every component's render</li>
          <li>initial render</li>
          <li>
            every render if specific props and/or states are changed between
            renders
          </li>
        </ul>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>useEffect()</CodeSpan> is placed inside a component and have
          access to states and variables.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useEffect, useState } from 'react';
        let toggle = true;
        
        function Component() {
          const [state1, setState1] = useState(0);
          const [state2, setState2] = useState(0);
        
          const [useEffectNoDep, setUseEffectNoDep] = useState(0);
          const [useEffectEmptyArrDep, setUseEffectEmptyArrDep] = useState(0);
          const [useEffectStateDep, setUseEffectStateDep] = useState(0);
          const [useEffectStatesDep, setUseEffectStatesDep] = useState(0);
        
          // run only ones on initial load
          useEffect(() => {
            setUseEffectEmptyArrDep(prevVal => prevVal + 1);
          }, []);
        
          // runs only if state is changed
          useEffect(() => {
            setUseEffectStateDep(prevVal => prevVal + 1);
          }, [state1]);
        
          // runs if state & anotherState are changed
          useEffect(() => {
            setUseEffectStatesDep(prevVal => prevVal + 1);
          }, [state1, state2]);
        
          useEffect(() => {
            // use effect without dependencies with state modification causes infinite loop
            // state upd --> render --> useEffect --> state upd --> render --> etc...
            // let's bring a flag & toggle it to avoid the loop
            // that is just my hack to demonstrate useEffect without dependencies

            if (!toggle) {
              toggle = !toggle;
              return;
            }

            setUseEffectNoDep(prevVal => prevVal + 1);
            toggle = !toggle;
          });
        
          return (
            <div>
              <div>useEffect(...) <b>{useEffectNoDep}</b></div>
              <div>useEffect(..., []) <b>{useEffectEmptyArrDep}</b></div>
              <div>useEffect(..., [state1]) <b>{useEffectStateDep}</b></div>
              <div>useEffect(..., [state1, state2]) <b>{useEffectStatesDep}</b></div>
              <hr />
              <h3>state1: {state1}</h3>
              <button onClick={() => setState1(state1 + 1)}>+ 1</button>
              <h3>state2: {state2}</h3>
              <button onClick={() => setState2(state2 + 1)}>+ 1</button>
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
  ],
};
