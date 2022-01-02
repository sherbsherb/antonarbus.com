import { useReducer } from 'react'
import { CodeSpan } from '../components/CodeSpan'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

const style = { border: '2px solid grey', padding: '10px', margin: '10px', maxWidth: '500px' }

function reducer(state, action) {
  // need to return new state
  if (action === 'increment') return state + 1
  if (action === 'reset') return 0
  // if action is not specified
  return state
}

function Component1() {
  const [countState1, dispatch1] = useReducer(reducer, 0)
  return (
    <div style={style}>
      <div>Component 1</div>
      <div>Count: {countState1}</div>
      <button onClick={() => dispatch1('increment')}>Increment</button>
      <button onClick={() => dispatch1('reset')}>Reset</button>
    </div>
  )
}

function Component2() {
  const [countState2, dispatch2] = useReducer(reducer, 0)
  return (
    <div style={style}>
      <div>Component 2</div>
      <div>Count: {countState2}</div>
      <button onClick={() => dispatch2('increment')}>Increment</button>
      <button onClick={() => dispatch2('reset')}>Reset</button>
    </div>
  )
}

const toRender = <>
  <Component1 />
  <Component2 />
</>

export const oneReducerForMultipleComponents = {
  title: (
    <>
      One <CodeSpan>reducer</CodeSpan> for multiple components
    </>
  ),
  date: '2021.10.18',
  tagsArr: ['react', 'useReducer', 'hook', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Note that we use only one <CodeSpan>reducer()</CodeSpan> function for two similar components.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useReducer } from 'react';
        const style = { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px',};
        
        function reducer(state, action) {
          // need to return new state
          if (action === 'increment') return state + 1;
          if (action === 'reset') return 0;
          // if action is not specified
          return state;
        }
        
        function Component1() {
          const [countState1, dispatch1] = useReducer(reducer, 0);
          return (
            <div style={style}>
              <div>Component 1</div>
              <div>Count: {countState1}</div>
              <button onClick={() => dispatch1('increment')}>Increment</button>
              <button onClick={() => dispatch1('reset')}>Reset</button>
            </div>
          );
        }
        
        function Component2() {
          const [countState2, dispatch2] = useReducer(reducer, 0);
          return (
            <div style={style}>
              <div>Component 2</div>
              <div>Count: {countState2}</div>
              <button onClick={() => dispatch2('increment')}>Increment</button>
              <button onClick={() => dispatch2('reset')}>Reset</button>
            </div>
          );
        }
        
        const toRender = <>
          <Component1 />
          <Component2 />
        </>;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
}
