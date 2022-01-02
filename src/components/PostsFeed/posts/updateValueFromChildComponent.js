import React from 'react'
import { CodeSpan } from '../components/CodeSpan'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

function Parent() {
  const [state, setState] = React.useState(0)

  return (
    <div style={{ background: 'lightyellow', padding: '20px' }}>
      <h1>Parent Component</h1>
      <br />
      <div>Count state variable: {state}</div>
      <br />
      <Child state={state} setState={setState} />
    </div>
  )
}

function Child(props) {
  return (
    <div style={{ background: 'lightgrey', padding: '20px' }}>
      <h1>Child Component</h1>
      <br />
      <button onClick={() => props.setState(props.state + 1)}>
        Update from child component
      </button>
      <br />
    </div>
  )
}

const toRender = <Parent />

export const updateValueFromChildComponent = {
  title: 'Update value from a child component',
  date: '2021.09.29',
  tagsArr: [
    'react',
    'props',
    'state',
    'useState',
    'component',
    'child',
    'parent',
    'basics',
  ],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          To update the state in a Parent component from a Child component we
          need to pass <CodeSpan>setState</CodeSpan> function via props to a
          child component.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Parent() {
          const [state, setState] = React.useState(0);
        
          return (
            <div style={{ background: 'lightyellow', padding: '20px' }}>
              <h1>Parent Component</h1>
              <br />
              <div>Count state variable: {state}</div>
              <br />
              <Child state={state} setState={setState} />
            </div>
          );
        }
        
        function Child(props) {
          return (
            <div style={{ background: 'lightgrey', padding: '20px' }}>
              <h1>Child Component</h1>
              <br />
              <button onClick={() => props.setState(props.state + 1)}>
                Update from child component
              </button>
              <br />
            </div>
          );
        }
        
        const toRender = <Parent />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
}
