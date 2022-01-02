import { useReducer } from 'react'
import { CodeSpan } from '../components/CodeSpan'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

const initState = { counter: 0, sex: 'male' }

function reducer(state, action) {
  if (action.type === 'increment') { return { ...state, counter: state.counter + action.value } }
  if (action.type === 'decrement') { return { ...state, counter: state.counter - action.value } }
  if (action.type === 'change name') { return { ...state, sex: 'female' } }
  if (action.type === 'reset') { return initState }
  // if action is not specified
  return state
}

function Component() {
  const [state, dispatch] = useReducer(reducer, initState)
  return (
    <>
      <div>Count: <b>{state.counter}</b></div>
      <div>Sex: <b>{state.sex}</b></div>
      <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: 'change name' })}>
        Change name
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </>
  )
}

const toRender = <Component />

export const useReducerWithObjStateAndReducer = {
  title: (
    <>
      <CodeSpan>useReducer()</CodeSpan> with state & reducer as objects
    </>
  ),
  date: '2021.10.18',
  tagsArr: ['react', 'useReducer', 'hook', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>useReducer()</CodeSpan> with a global state & actions with parameters in objects.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Save approach as in previous article, but <i>state</i> and <i>actions</i> are enhanced.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useReducer } from 'react';

        const initState = { counter: 0, sex: 'male' };

        function reducer(state, action) {
          if (action.type === 'increment')
            return { ...state, counter: state.counter + action.value };
          if (action.type === 'decrement')
            return { ...state, counter: state.counter - action.value };
          if (action.type === 'change name') 
            return { ...state, sex: 'female' };
          if (action.type === 'reset') 
            return initState;
          // if action is not specified
          return state;
        }

        function Component() {
          const [state, dispatch] = useReducer(reducer, initState);
          return (
            <>
              <div>Count: <b>{state.counter}</b></div>
              <div>Sex: <b>{state.sex}</b></div>
              <button onClick={() => dispatch({ type: 'increment', value: 5 })}>
                Increment 5
              </button>
              <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>
                Decrement 5
              </button>
              <button onClick={() => dispatch({ type: 'change name' })}>
                Change name
              </button>
              <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
              </button>
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
}
