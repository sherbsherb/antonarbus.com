import { useState } from 'react'
import { CodeSpan } from '../components/CodeSpan'

const greenCss = { color: 'green' }
const redCss = { color: 'red' }
const marginCss = { margin: '10px' }

function StateIsImmutable() {
  const [state, setState] = useState([1, 2, 3])
  return (
    <div>
      <span>State value: </span> <span style={greenCss}>{JSON.stringify(state)}</span>
      <div style={marginCss}>
        <button
          onClick={() => {
            state.push(state[state.length - 1] + 1)
            // incorrect
            // state is updated, but not rendered

            console.log(state)
          }}
        >
          Add value directly to the state array
        </button>
        <span style={{ ...marginCss, ...redCss }}></span>
      </div>
      <div style={marginCss}>
        <button
          onClick={() => {
            setState([...state, state[state.length - 1] + 1])
            console.log(state)
          }}
        >
          Assign to the state a copy of array with additional value
        </button>
      </div>
    </div>
  )
}

const toRender = <StateIsImmutable />

export const immutableState = {
  title: 'React state is immutable',
  date: '2021.09.28',
  tagsArr: ['react', 'state', 'useState', 'immutable', 'basics', 'hook'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          If you mutate data like <CodeSpan>myData.a.b.push(10)</CodeSpan>{' '}
          there is no way of determining which data has changed since the
          previous copy has been overwritten
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Instead, you need to create a new copy of{' '}
          <CodeSpan>myData</CodeSpan> and change only the parts of it that need to be changed.
          For state data React can compare the old copy with the new one.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val:
      `
        import React, { useState } from 'react';

        const greenCss = { color: 'green' }
        const redCss = { color: 'red' }
        const marginCss = { margin: '10px' }

        function StateIsImmutable() {
          const [state, setState] = useState([1, 2, 3]);
          return (
            <div>
              <span>State value: </span> <span style={greenCss}>{JSON.stringify(state)}</span>
              <div style={marginCss}>
                <button
                  onClick={() => {
                    state.push(state[state.length - 1] + 1); 
                    // incorrect
                    // state is updated, but not rendered
                    console.log(state)
                  }}
                >
                  Add value directly to the state array
                </button>
                <span style={{...marginCss, ...redCss}}>state is updated, but not rendered!</span>
              </div>
              <div style={marginCss}>
                <button
                  onClick={() => {
                    setState([...state, state[state.length - 1] + 1]);
                    console.log(state)
                  }}
                >
                  Assign to the state a copy of array with additional value
                </button>
              </div>
            </div>
          );
        }

        const toRender = <StateIsImmutable />
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
}
