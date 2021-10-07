import React, { useState } from 'react';
import { CodeSpan } from '../../components/post components/CodeSpan';
import { Link } from '../../components/post components/Link';

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
  id: '76j',
  tagsArr: ['react', 'state', 'useState', 'input', 'basics', 'hook'],
  abstract: 'abstract from the article',
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
