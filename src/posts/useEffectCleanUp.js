import React, { useEffect, useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';

const style = {
  border: '2px solid grey',
  padding: '10px',
  margin: '10px',
  maxWidth: '500px',
};

function Parent1() {
  const [toggle, setToggle] = useState(false);
  return (
    <div style={style}>
      <div>Parent component</div>
      <button onClick={() => setToggle(!toggle)}>show / hide component </button>
      {toggle && <Child1 />}
    </div>
  );
}

function Child1() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMouseCords(e) {
    setX(e.clientX);
    setY(e.clientY);
    document.title = `x: ${e.clientX} + y: ${e.clientY}`;
  }

  useEffect(() => {
    document.addEventListener('mousemove', logMouseCords);
  }, []);

  return (
    <div style={style}>
      <div>Child component</div>
      <div>
        xCord: <b>{x}</b>
      </div>
      <div>
        yCord: <b>{y}</b>
      </div>
    </div>
  );
}

const toRender1 = <Parent1 />;

function Parent2() {
  const [toggle, setToggle] = useState(false);
  return (
    <div style={style}>
      <div>Parent component</div>
      <button onClick={() => setToggle(!toggle)}>show / hide component </button>
      {toggle && <Child2 />}
    </div>
  );
}

function Child2() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  function logMouseCords(e) {
    setX(e.clientX);
    setY(e.clientY);
    document.title = `x: ${e.clientX} + y: ${e.clientY}`;
  }

  useEffect(() => {
    document.addEventListener('mousemove', logMouseCords);
    return () => {
      console.log('component unmounting code');
      document.removeEventListener('mousemove', logMouseCords);
    };
  }, []);

  return (
    <div style={style}>
      <div>Child component</div>
      <div>
        xCord: <b>{x}</b>
      </div>
      <div>
        yCord: <b>{y}</b>
      </div>
    </div>
  );
}

const toRender2 = <Parent2 />;

export const useEffectCleanUp = {
  title: (
    <>
      <CodeSpan>useEffect()</CodeSpan> cleanup
    </>
  ),
  date: '2021.10.16',
  tagsArr: ['react', 'useEffect', 'hook', 'cleanup'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          If we remove the component from the DOM, some functions from the
          component can still run.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Let's take an example with <CodeSpan>addEventListener()</CodeSpan>{' '}
          from the previous article and modify it a bit.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We will have a parent component with a toggle button to show / hide
          the the child component with coordinates. Apart from showing
          coordinates we will display coordinates also in <i>document.title</i>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        const style = { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px', };

        function Parent() {
          const [toggle, setToggle] = useState(false);
          return (
            <div style={style}>
              <div>Parent component</div>
              <button onClick={() => setToggle(!toggle)}>show / hide component  </button>
              {toggle && <Child />}
            </div>
          );
        }
        
        function Child() {
          const [x, setX] = useState(0);
          const [y, setY] = useState(0);
        
          function logMouseCords(e) {
            setX(e.clientX);
            setY(e.clientY);
            document.title = \`x: \${e.clientX} + y: \${e.clientY}\`;
          }
        
          useEffect(() => {
            document.addEventListener('mousemove', logMouseCords);
          }, []);
        
          return (
            <div style={style}>
              <div>Child component</div>
              <div>xCord: <b>{x}</b></div>
              <div>yCord: <b>{y}</b></div>
            </div>
          );
        }
        
        const toRender = <Parent />;
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
          Note that after hiding the child component we still have coordinates
          updated in the <i>document.title</i>, which is not desirable.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We also get a warning in dev tools: <span style={{ color: 'red', fontSize: '14px' }}>
            Can't perform a React state update on an unmounted component. This
            is a no-op, but it indicates a memory leak in your application. To
            fix, cancel all subscriptions and asynchronous tasks in a useEffect
            cleanup function.
          </span>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          We may solve it by running a function on a component unmounting and
          clean the code.
        </>
      ),
    },

    {
      type: 'text',
      val: (
        <>
          Just provide a return function inside{' '}
          <CodeSpan>useEffect()</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      val: `
        useEffect(() => {
          document.addEventListener('mousemove', logMouseCords);
          return () => {
            console.log('component unmounting code')
            document.removeEventListener('mousemove', logMouseCords)
          }
        }, []);
      `,
    },

    {
      type: 'output',
      val: toRender2,
    },
  ],
};
