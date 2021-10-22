import React, { useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';

function Component1() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prevVal => prevVal + 1);
  const decrement = () => setCount(prevVal => prevVal - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <div>Count: <b>{count}</b></div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

const toRender1 = <Component1 />;

// custom hook
function useCounter(initVal = 0, step = 1) {
  const [count, setCount] = useState(initVal)
  const increment = () => setCount(prevVal => prevVal + step);
  const decrement = () => setCount(prevVal => prevVal - step);
  const reset = () => setCount(initVal);
  return [count, increment, decrement, reset]
}

function Component2() {
  const step = 5
  const startFrom = 10
  const [count, increment, decrement, reset] = useCounter(startFrom, step)

  return (
    <div>
      <div>Count: <b>{count}</b></div>
      <button onClick={increment}>+{step}</button>
      <button onClick={decrement}>-{step}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

const toRender2 = <Component2 />;

export const customHooks = {
  title: 'Counter custom hook',
  date: '2021.10.22',
  tagsArr: ['react', 'hook'],
  postParts: [
    {
      type: 'text',
      val: (
        <ul>
          <li>Custom hook is a function which should be called from the React code & not from the Regular JS functions</li>
          <li>Custom hook function name starts from <i>"use"</i></li>
          <li>Custom hook can call other hooks, but normal functions can not</li>
        </ul>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Let's make a simple counter component as we normally do.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function useCounter(initVal = 0, step = 1) {
          const [count, setCount] = useState(initVal)
          const increment = () => setCount(prevVal => prevVal + step);
          const decrement = () => setCount(prevVal => prevVal - step);
          const reset = () => setCount(initVal);
          return [count, increment, decrement, reset]
        }

        function Component1() {
          const [count, setCount] = useState(0)
          const increment = () => setCount(prevVal => prevVal + 1);
          const decrement = () => setCount(prevVal => prevVal - 1);
          const reset = () => setCount(0);
        
          return (
            <div>
              <div>Count: <b>{count}</b></div>
              <button onClick={increment}>+1</button>
              <button onClick={decrement}>-1</button>
              <button onClick={reset}>Reset</button>
            </div>
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
          Let's extract functions into a custom hook & use it in the component.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component2() {
          const step = 5
          const startFrom = 10
          const [count, increment, decrement, reset] = useCounter(startFrom, step)
        
          return (
            <div>
              <div>Count: <b>{count}</b></div>
              <button onClick={increment}>+{step}</button>
              <button onClick={decrement}>-{step}</button>
              <button onClick={reset}>Reset</button>
            </div>
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
      val: (
        <>
          We enhanced the hook a bit by bringing <i>initVal</i> & <i>step</i> arguments.
        </>
      ),
    },
  ],
};
