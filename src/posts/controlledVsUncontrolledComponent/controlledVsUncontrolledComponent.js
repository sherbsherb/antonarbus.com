import React, { useRef, useState } from 'react';
import { Link, CodeInline } from '../../components/post components/Post';

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

export const controlledVsUncontrolledComponent = {
  title: 'Controlled vs uncontrolled component',
  date: '2021.09.26',
  tagsArr: ['react', 'useRef', 'useState', 'input', 'controlled', 'uncontrolled', 'basics', 'hook', 'DOM'],
  abstract: 'abstract from the article',
  articlesArr: [
    {
      type: 'text',
      val: (
        <>
          <strong>Controlled component</strong> data is handled 
          by a React component via <CodeInline>useState()</CodeInline> {' '}
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
      `,
    },
    {
      type: 'output',
      val: <ControlledInput></ControlledInput>,
    },
    {
      type: 'text',
      val: (
        <>
          <strong>Uncontrolled component</strong> data is handled by the DOM itself. 
          We need to use <CodeInline>useRef()</CodeInline> {' '}
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
      `,
    },
    {
      type: 'text',
      val: (
        <>
          <CodeInline>inpRef.current</CodeInline> {' '} refers to the DOM element.
        </>
      ),
    },
    {
      type: 'output',
      val: <UncontrolledInput></UncontrolledInput>,
    },
    
  ],
};