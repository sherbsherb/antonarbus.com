import React, { createContext, useContext, useState } from 'react';
import shortid from 'shortid';
import { CodeSpan } from '../components/post/CodeSpan';

const Context = createContext('');

function Parent() {
  const [state, setState] = useState('state')

  const contextValue={
    state,
    setState,
    message: 'hello from the context',
    style: { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px' }
  }

  return (
    <Context.Provider value={contextValue}>
      <div style={contextValue.style}>
        <div>Parent</div>
        <div>Data from context: <b>{contextValue.message}</b></div>
        <div>State: <b>{contextValue.state}</b></div>
        <button onClick={() => contextValue.setState(shortid()) }>Change state 1</button>
        <Child name='Child 1'/>
        <Child name='Child 2'/>
      </div>
    </Context.Provider>
  );
}

function Child(props) {
  const data = useContext(Context);
  return (
    <div style={data.style}>
      <div>{props.name}</div>
      <div>Data from context: <b>{data.message}</b></div>
      <div>State 1: <b>{data.state}</b></div>
      <button onClick={() => data.setState(shortid()) }>Change state 1</button>
    </div>
  );
}

const toRender = <Parent />;

export const useContexWithUseStateWithoutUseReducer = {
  title: <>
    <CodeSpan>useContext()</CodeSpan> with <CodeSpan>useState()</CodeSpan> & without <CodeSpan>useReducer()</CodeSpan>
  </>
  ,
  date: '2021.10.25',
  tagsArr: ['react', 'useReducer', 'hook', 'basics'],
  postParts: [
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { createContext, useContext, useState } from 'react';
        import shortid from 'shortid';      

        const Context = createContext('');
        
        function Parent() {
          const [state, setState] = useState('state')
        
          const contextValue={
            state,
            setState,
            message: 'hello from the context',
            style: { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px' }
          }
        
          return (
            <Context.Provider value={contextValue}>
              <div style={contextValue.style}>
                <div>Parent</div>
                <div>Data from context: <b>{contextValue.message}</b></div>
                <div>State: <b>{contextValue.state}</b></div>
                <button onClick={() => contextValue.setState(shortid()) }>Change state 1</button>
                <Child name='Child 1'/>
                <Child name='Child 2'/>
              </div>
            </Context.Provider>
          );
        }
        
        function Child(props) {
          const data = useContext(Context);
          return (
            <div style={data.style}>
              <div>{props.name}</div>
              <div>Data from context: <b>{data.message}</b></div>
              <div>State 1: <b>{data.state}</b></div>
              <button onClick={() => data.setState(shortid()) }>Change state 1</button>
            </div>
          );
        }
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
