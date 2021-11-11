import React, { createContext, useContext, useReducer } from 'react';
import { CodeSpan } from '../components/CodeSpan';
const style = {
  border: '2px solid grey',
  padding: '10px',
  margin: '10px',
  maxWidth: '500px',
};

function reducer(state, action) {
  if (action === 'increment') return state + 1;
  return state;
}
const ContextA = createContext('');

function Parent() {
  const [countState, dispatch] = useReducer(reducer, 0);

  return (
    <ContextA.Provider value={{ countState: countState, dispatch: dispatch }}>
      <div style={style}>
        <div>Parent</div>
        <div>Count: {countState}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <Child childName={'Child A'} />
        <Child childName={'Child B'} />
      </div>
    </ContextA.Provider>
  );
}

function Child(props) {
  const data = useContext(ContextA);
  return (
    <div style={style}>
      <div>{props.childName}</div>
      <div>Count: {data.countState}</div>
      <button onClick={() => data.dispatch('increment')}>Increment</button>
    </div>
  );
}

const toRender = <Parent />;

export const useContextWithUseReducer = {
  title: (
    <>
      <CodeSpan>useContext()</CodeSpan> & <CodeSpan>useReducer()</CodeSpan>
    </>
  ),
  date: '2021.10.18',
  tagsArr: ['react', 'useContext', 'useReducer', 'hook', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Let's share common <i>state</i> between components with{' '}
          <CodeSpan>createContext()</CodeSpan> and update it with common{' '}
          <CodeSpan>reducer()</CodeSpan>.
        </>
      ),
    },

    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { createContext, useContext, useReducer } from 'react';
        const style = { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px',};
        
        function reducer(state, action) {
          if (action === 'increment') return state + 1;
          return state;
        }
        const ContextA = createContext('');
        
        function Parent() {
          const [countState, dispatch] = useReducer(reducer, 0);
        
          return (
            <ContextA.Provider value={{countState: countState, dispatch: dispatch}}>
                <div style={style}>
                  <div>Parent</div>
                  <div>Count: {countState}</div>
                  <button onClick={() => dispatch('increment')}>Increment</button>
                  <Child childName={'Child A'} />
                  <Child childName={'Child B'} />
                </div>
            </ContextA.Provider>
          );
        }
        
        function Child(props) {
          const data = useContext(ContextA);
          return (
            <div style={style}>
              <div>{props.childName}</div>
              <div>Count: {data.countState}</div>
              <button onClick={() => data.dispatch('increment')}>Increment</button>
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
};
