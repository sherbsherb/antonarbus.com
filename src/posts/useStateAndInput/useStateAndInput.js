import React, { useState } from 'react';
import { CodeInline } from '../../components/post components/Post';

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
      <CodeInline>useState()</CodeInline> & input
    </>
  ),
  date: '2021.09.26',
  tagsArr: ['react', 'state', 'useState', 'input', 'basics', 'hook'],
  abstract: 'abstract from the article',
  articlesArr: [
    {
      type: 'text',
      val: (
        <>
          We have to use <CodeInline>useState()</CodeInline> to be able to see
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
