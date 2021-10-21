import React, { useRef, useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
const style = { border: '2px solid grey', padding: '10px', margin: '10px', maxWidth: '500px' };

function Parent() {
  const [state, setState] = useState(false);
  const ref = useRef(0);
  ref.current++;
  const someVar = 666;
  const someFunc = () => console.log('I am function');
  return (
    <div style={style}>
      <div><b>Parent</b> rendered x<b>{ref.current}</b></div>
      <div>State: <b>{state.toString()}</b></div>
      <button onClick={() => setState(!state)}>Update state</button>
      <Child name={'Child'} />
      <MemoizedChild name={'Memoized child with var pass'} variable={someVar} />
      <MemoizedChild name={'Memoized child with func pass'} func={someFunc} />
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

export const useMemoHook = {
  title: (
    <>
      <CodeSpan>useMemo()</CodeSpan> hook
    </>
  ),
  date: '2021.10.21',
  tagsArr: ['react', 'useMemo', 'hook', 'basics'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          If a component has same props & renders the same result we can wrap it
          into <CodeSpan>React.memo()</CodeSpan> to skip a render.
        </>
      ),
    },
    
    {
      type: 'code',
      lang: 'jsx',
      val: `
      
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
