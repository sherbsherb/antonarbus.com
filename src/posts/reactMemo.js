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

export const reactMemo = {
  title: (
    <>
      <CodeSpan>React.memo()</CodeSpan>
    </>
  ),
  date: '2021.10.20',
  tagsArr: ['react', 'React.memo', 'hoc', 'basics'],
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
      type: 'text',
      val: (
        <>
          <CodeSpan>React.memo()</CodeSpan> is used for the performance
          optimization.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>React.memo()</CodeSpan> is a higher-order component, which
          means it takes a component and returns a new component.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
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
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: (
        <>
          Note that <i>Memoized child with func pass</i> is not cached and
          re-renders every time the state is updated.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          It happens because passed function is created every time the Parent
          component renders. Functions passed are not equal to each other because they are objects, 
          even they look and behave the same way.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          <i>React.memo</i> considers passed function as a new value. 
          We can fix it & memorize function with <CodeSpan>useCallback()</CodeSpan> hook.
        </>
      ),
    },
  ],
};
