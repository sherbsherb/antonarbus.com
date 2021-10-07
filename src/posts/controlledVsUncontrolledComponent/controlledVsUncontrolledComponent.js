import React, { useRef, useState } from 'react';
import { CodeSpan } from '../../components/post components/CodeSpan';
import { Link } from '../../components/post components/Link';

function ControlledInput() {
  const [inpVal, setInpVal] = useState('initial text');

  return (
    <>
      <h1>{inpVal}</h1>
      <input
        type="text"
        value={inpVal}
        onChange={e => setInpVal(e.target.value)}
      />
    </>
  );
}

const toRender1 = <ControlledInput />

function UncontrolledInput() {
  const [inpVal, setInpVal] = useState('initial text');
  const inpRef = useRef('initial text')

  return (
    <>
      <h1>{inpVal}</h1>
      <input
        ref={inpRef}
        type="text"
        value={inpVal}
        onChange={() => setInpVal(inpRef.current.value)}
      />
    </>
  );
}

const toRender2 = <UncontrolledInput />

export const controlledVsUncontrolledComponent = {
  title: 'Controlled vs uncontrolled component',
  date: '2021.09.26',
  id: '6de34',
  tagsArr: ['react', 'useRef', 'useState', 'input', 'controlled', 'uncontrolled', 'basics', 'hook', 'DOM'],
  abstract: 'abstract from the article',
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <strong>Controlled component</strong> data is handled 
          by a React component via <CodeSpan>useState()</CodeSpan> {' '}
          <Link link={'https://reactjs.org/docs/hooks-reference.html#usestate'}>hook</Link>. 
          Event handler takes care of a state update.
        </>
      ),
    },
    {
      type: 'code',
      val: `
        import React, { useRef, useState } from 'react';

        function ControlledInput() {
          const [inpVal, setInpVal] = useState('initial text');

          return (
            <>
              <h1>{inpVal}</h1>
              <input
                type="text"
                value={inpVal}
                onChange={e => setInpVal(e.target.value)}
              />
            </>
          );
        }

        const toRender1 = <ControlledInput />
      `,
    },
    {
      type: 'output',
      val: toRender1
    },
    {
      type: 'text',
      val: (
        <>
          <strong>Uncontrolled component</strong> data is handled by the DOM itself. 
          We need to use <CodeSpan>useRef()</CodeSpan> {' '}
          <Link link={'https://reactjs.org/docs/hooks-reference.html#useref'}>hook</Link> to get form values from the DOM.
        </>
      ),
    },
    {
      type: 'code',
      val: `
        import React, { useRef, useState } from 'react';

        function UncontrolledInput() {
          const [inpVal, setInpVal] = useState('initial text');
          const inpRef = useRef('initial text')
        
          return (
            <>
              <h1>{inpVal}</h1>
              <input
                ref={inpRef}
                type="text"
                value={inpVal}
                onChange={() => setInpVal(inpRef.current.value)}
              />
            </>
          );
        }

        const toRender2 = <UncontrolledInput />
      `,
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>inpRef.current</CodeSpan> {' '} refers to the DOM element.
        </>
      ),
    },
    {
      type: 'output',
      val: toRender2
    },
    
  ],
};