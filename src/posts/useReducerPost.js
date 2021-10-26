import React, { useReducer } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Lnk } from '../components/post/Lnk';

const initState = 0;
function reducer(state, action) {
  // need to return new state
  if (action === 'increment') return state + 1;
  if (action === 'decrement') return state - 1;
  if (action === 'reset') return initState;
  // if action is not specified
  return state;
}

function Component() {
  const [countState, dispatch] = useReducer(reducer, initState);
  return (
    <>
      <div>Count: {countState}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  );
}

const toRender = <Component />;

export const useReducerPost = {
  title: (
    <>
      <CodeSpan>useReducer()</CodeSpan> hook
    </>
  ),
  date: '2021.10.18',
  tagsArr: ['react', 'useReducer', 'hook', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk
            path={'https://reactjs.org/docs/hooks-reference.html#usereducer'}
          >
            useReducer
          </Lnk>{' '}
          hook is the alternative to <i>useState</i> and meant to manage state.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          The principle for <CodeSpan>useReducer()</CodeSpan> hook is similar to{' '}
          <i>Redux</i>, but state is not an object, but a pure value & action
          value is not an object with <i>type</i> property, but pure string.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          With <CodeSpan>useReducer()</CodeSpan> instead of having multiple
          setState in different functions, you can have them all in one place.
        </>
      ),
    },

    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useReducer } from 'react';

        const initState = 0;
        function reducer(state, action) {
          // need to return new state
          if (action === 'increment') return state + 1;
          if (action === 'decrement') return state - 1;
          if (action === 'reset') return initState;
          // if action is not specified
          return state;
        }
        
        function Component() {
          const [countState, dispatch] = useReducer(reducer, initState);
          return (
            <>
              <div>Count: {countState}</div>
              <button onClick={() => dispatch('increment')}>Increment</button>
              <button onClick={() => dispatch('decrement')}>Decrement</button>
              <button onClick={() => dispatch('reset')}>Reset</button>
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
