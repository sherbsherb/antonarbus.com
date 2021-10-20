import React, { useCallback, useRef, useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
const style = { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px' };

function Parent() {
  const [state, setState] = useState(false);
  const ref = useRef(0);
  ref.current++;
  const someVar = 666;
  const someFunc = () => console.log('I am function');
  const memoizedFunc = useCallback(someFunc, []);
  return (
    <div style={style}>
      <div><b>Parent</b> rendered x<b>{ref.current}</b></div>
      <div>State: <b>{state.toString()}</b></div>
      <button onClick={() => setState(!state)}>Update state</button>
      <Child name={'Child'} />
      <MemoizedChild name={'Memoised child with var pass'} variable={someVar} />
      <MemoizedChild name={'Memoised child with func pass'} func={someFunc} />
      <MemoizedChild name={'Memoised child with memoized func pass'} func={memoizedFunc} />
    </div>
  );
}

function Child(props) {
  const ref = useRef(0);
  ref.current++;
  return (
    <div style={style}>
      <b>{props.name}</b> rendered x<b>{ref.current}</b>
    </div>
  );
}

const MemoizedChild = React.memo(Child);

const toRender = <Parent />;

export const useCallbackHook = {
  title: (
    <>
      <CodeSpan>useCallback()</CodeSpan> hook
    </>
  ),
  date: '2021.10.20',
  tagsArr: ['react', 'useCallback', 'hook', 'basics'],
  postParts: [
    
    {
      type: 'text',
      val: (
        <>
          As mentioned in the previous article we can not cache a function created within a component,
          because same objects are not equal.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          But fortunately <CodeSpan>useCallback()</CodeSpan> hook returns memoized version of
          the function.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Let's convert passed function from previous example into memoised
          cached function wrapping it into <CodeSpan>useCallback()</CodeSpan>.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>useCallback(func, [dep])</CodeSpan> accepts a callback
          function as the first argument and array of dependencies as a second
          one.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <i>useCallback</i> will return a memoized version of the callback that only changes if one of the dependencies has changed. 
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>useCallback(func, deps)</CodeSpan> is equivalent to <CodeSpan>useMemo(() => func, deps)</CodeSpan>  
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useCallback, useRef, useState } from 'react';
        const style = { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px' };

        function Parent() {
          const [state, setState] = useState(false);
          const ref = useRef(0);
          ref.current++;
          const someVar = 666;
          const someFunc = () => console.log('I am function');
          const memoizedFunc = useCallback(someFunc, []);
          return (
            <div style={style}>
              <div><b>Parent</b> rendered x<b>{ref.current}</b></div>
              <div>State: <b>{state.toString()}</b></div>
              <button onClick={() => setState(!state)}>Update state</button>
              <Child name={'Child'} />
              <MemoizedChild name={'Memoised child with var pass'} variable={someVar} />
              <MemoizedChild name={'Memoised child with func pass'} func={someFunc} />
              <MemoizedChild name={'Memoised child with memoized func pass'} func={memoizedFunc} />
            </div>
          );
        }

        function Child(props) {
          const ref = useRef(0);
          ref.current++;
          return (
            <div style={style}><b>{props.name}</b> rendered x<b>{ref.current}</b></div>
          );
        }

        const MemoizedChild = React.memo(Child);

        const toRender = <Parent />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
