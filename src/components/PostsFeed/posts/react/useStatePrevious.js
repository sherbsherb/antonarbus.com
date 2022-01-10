import { useState } from 'react'
import { CodeSpan } from '../../components/CodeSpan'
import { H3 } from '../../components/H3'

function Component1() {
  const [state, setState] = useState(0)

  return (
    <div>
      <H3>{state}</H3>
      <button
        onClick={() => {
          for (let i = 0; i < 5; i++) setState(state + 1)
        }}
      >
        Increment by 5 async
      </button>
    </div>
  )
}

const toRender1 = <Component1 />

function Component2() {
  const [state, setState] = useState(0)

  return (
    <div>
      <H3>{state}</H3>
      <button
        onClick={() => {
          for (let i = 0; i < 5; i++) setState(prevVal => prevVal + 1)
        }}
      >
        Increment by 5 with previous value
      </button>
    </div>
  )
}

const toRender2 = <Component2 />

export const useStatePrevious = {
  title: (
    <>
      <CodeSpan>useState()</CodeSpan> & previous value
    </>
  ),
  date: '2021.10.15',
  tagsArr: ['react', 'useState', 'hook', 'previous'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>setState(state + 1)</CodeSpan> is asynchronous and we can
          not rely on its value.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component1() {
          const [state, setState] = useState(0);
        
          return (
            <div>
              <H3>{state}</H3>
              <button
                onClick={() => {
                  for (let i = 0; i < 5; i++) setState(state + 1);
                }}
              >
                Increment by 5 async
              </button>
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
          Instead we can access the previous value via callback{' '}
          <CodeSpan>{'setState(prevVal => prevVal + 1)'}</CodeSpan>.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Component2() {
          const [state, setState] = useState(0);
        
          return (
            <div>
              <H3>{state}</H3>
              <button
                onClick={() => {
                  for (let i = 0; i < 5; i++) setState(prevVal => prevVal + 1);
                }}
              >
                Increment by 5 with previous value
              </button>
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
  ],
}
