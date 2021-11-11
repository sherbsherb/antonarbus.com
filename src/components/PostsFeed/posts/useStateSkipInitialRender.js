import React, { useEffect, useRef, useState } from 'react';
import { CodeSpan } from '../components/CodeSpan';
const style = {
  border: '2px solid grey',
  padding: '10px',
  margin: '10px',
  maxWidth: '500px',
};

function Component() {
  const [stateA, setStateA] = useState(0);
  const [stateB, setStateB] = useState(0);
  return (
    <div style={style}>
      <h3>Parent</h3>
      <div>
        <button onClick={() => setStateA(Math.random())}>Render Child A</button>
      </div>
      <div>
        <button onClick={() => setStateB(Math.random())}>
          Render Child B without useEffect on initial render
        </button>
      </div>
      {!!stateA && <ChildA stateA={stateA} />}
      {!!stateB && <ChildB stateB={stateB} />}
    </div>
  );
}

function ChildA(props) {
  useEffect(() => {
    alert('I am useEffect in Child A');
  }, [props.stateA]);
  return (
    <div style={style}>
      <h3>Child A</h3>
    </div>
  );
}

function ChildB(props) {
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    alert('I am useEffect in Child B');
  }, [props.stateB]);

  return (
    <div style={style}>
      <h3>Child B</h3>
    </div>
  );
}

const toRender = <Component />;

export const useStateSkipInitialRender = {
  title: (
    <>
      Let <CodeSpan>useState()</CodeSpan> skip initial render
    </>
  ),
  date: '2021.10.19',
  tagsArr: ['useRef', 'useEffect', 'render', 'hook', 'react'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          No matter what dependency we put into <i>useState</i> array, it will
          trigger function on an initial render.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          To avoid <i>useState</i> running function on initial render we may
          bring a boolean flag, which we negate after first render.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useEffect, useRef, useState } from 'react';
        const style = { border: '2px solid grey',  padding: '10px',  margin: '10px',  maxWidth: '500px',};
        
        function Component() {
          const [stateA, setStateA] = useState(0);
          const [stateB, setStateB] = useState(0);
          return (
            <div style={style}>
              <h3>Parent</h3>
              <div><button onClick={() => setStateA(Math.random())}>Render Child A</button></div>
              <div><button onClick={() => setStateB(Math.random())}>Render Child B without useEffect on initial render</button></div>
              {!!stateA && <ChildA stateA={stateA}/>}
              {!!stateB && <ChildB stateB={stateB}/>}
            </div>
          );
        }
        
        function ChildA(props) {
          useEffect(() => { alert('I am useEffect in Child A')}, [props.stateA])
          return (
            <div style={style}>
              <h3>Child A</h3>
            </div>
          )
        }
        
        function ChildB(props) {
          const initialRender = useRef(true);

          useEffect(() => { 
            if (initialRender.current) {
              initialRender.current = false;
              return;
            }
            alert('I am useEffect in Child B')
          }, [props.stateB])
        
          return (
            <div style={style}>
              <h3>Child B</h3>
            </div>
          )
        }
        
        const toRender = <Component />;
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
