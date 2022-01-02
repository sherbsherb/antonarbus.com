import { createContext, useContext } from 'react'
import { CodeSpan } from '../components/CodeSpan'
import { Lnk } from '../components/Lnk'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

const style = { border: '2px solid grey', padding: '10px', margin: '10px', maxWidth: '500px' }

const ContextA = createContext('')
const ContextB = createContext('')

function Parent() {
  return (
    <ContextA.Provider value={'I am Context A'}>
      <ContextB.Provider value={'I am Context B'}>
        <div style={style}>
          <div>Parent</div>
          <div>
            <code>Context.Provider</code> is used to pass data to children
          </div>
          <ChildA />
        </div>
      </ContextB.Provider>
    </ContextA.Provider>
  )
}

function ChildA() {
  const varA = useContext(ContextA)
  const varB = useContext(ContextB)
  return (
    <div style={style}>
      <div>ChildA</div>
      <div> Data from the Parent's context:</div>
      <b>{`${varA} + ${varB}` }</b>
      <ChildB />
    </div>
  )
}

function ChildB() {
  const varA = useContext(ContextA)
  const varB = useContext(ContextB)
  return (
    <div style={style}>
      <div>ChildB</div>
      <div> Data from the Parent's context:</div>
      <b>{`${varA} + ${varB}` }</b>
      <ChildC />
    </div>
  )
}

function ChildC() {
  const varA = useContext(ContextA)
  const varB = useContext(ContextB)
  return (
    <div style={style}>
      <div>ChildC</div>
      <div> Data from the Parent's context:</div>
      <b>{`${varA} + ${varB}` }</b>
    </div>
  )
}

const toRender = <Parent />

export const useContextPost = {
  title: (
    <>
      <CodeSpan>useContext()</CodeSpan> hook
    </>
  ),
  date: '2021.10.18',
  tagsArr: ['react', 'useContext', 'hook', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk
            path={'https://reactjs.org/docs/hooks-reference.html#usecontext'}
          >
            useContext
          </Lnk>{' '}
          provides a way to pass data through the component tree without having
          to pass it via props manually.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We create a special object{' '}
          <CodeSpan>
            const MyContext = React.createContext(defaultValue)
          </CodeSpan>{' '}
          and wrap our component into a special <i>Provider</i> component where
          we pass a value we want to share with descendants{' '}
          <CodeSpan>{'<MyContext.Provider value={/* value */}>'}</CodeSpan>
        </>
      ),
    },

    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { createContext, useContext, useEffect, useState } from 'react';
        const style = { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px',};
        
        const ContextA = createContext('');
        const ContextB = createContext('');
        
        function Parent() {
          return (
            <ContextA.Provider value={'I am Context A'}>
              <ContextB.Provider value={'I am Context B'}>
                <div style={style}>
                  <div>Parent</div>
                  <div><code>Context.Provider</code> is used to pass data to children</div>
                  <ChildA />
                </div>
              </ContextB.Provider>
            </ContextA.Provider>
          );
        }
        
        function ChildA() {
          const varA = useContext(ContextA);
          const varB = useContext(ContextB);
          return (
            <div style={style}>
              <div>ChildA</div>
              <div> Data from the Parent's context:</div>
              <b>{varA + ' + ' + varB }</b>
              <ChildB />
            </div>
          );
        }
        
        function ChildB() {
          const varA = useContext(ContextA);
          const varB = useContext(ContextB);
          return (
            <div style={style}>
              <div>ChildB</div>
              <div> Data from the Parent's context:</div>
              <b>{varA + ' + ' + varB }</b>
              <ChildC />
            </div>
          );
        }
        
        function ChildC() {
          const varA = useContext(ContextA);
          const varB = useContext(ContextB);
          return (
            <div style={style}>
              <div>ChildC</div>
              <div> Data from the Parent's context:</div>
              <b>{varA + ' + ' + varB }</b>
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
