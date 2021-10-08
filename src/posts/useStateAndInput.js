import React, { useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Link } from '../components/post/Link';

function InputWithState() {
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

const toRender = <InputWithState />

export const useStateAndInput = {
  title: (
    <>
      <CodeSpan>useState()</CodeSpan> & input
    </>
  ),
  date: '2021.09.26',
  tagsArr: ['react', 'state', 'useState', 'input', 'basics', 'hook'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          We have to use <CodeSpan>useState()</CodeSpan> to be able to see
          an input changes on the screen.
        </>
      ),
    },
    {
      type: 'text',
      val: 'Otherwise react does not know what to render.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useState } from 'react';

        function InputWithState() {
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

        const toRender = <InputWithState />
      `,
    },
    {
      type: 'output',
      val: toRender
    },
  ],
};
