import React, { useState } from 'react';
const style = { width: '50px', marginRight: '10px' };

function Component() {
  const [valState, setValState] = useState('?');
  const [fromState, setFromState] = useState();
  const [toState, setToState] = useState();

  function randomNumFromTo(from, to) {
    if (from === to && from === 0) { from = 1; to = 100}
    if (isNaN(from)) from = 1
    if (isNaN(to)) to = 100
    if (from > to) [from, to] = [to, from]
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  return (
    <>
      <input
        placeholder={'from'}
        style={style}
        value={fromState}
        onChange={e => setFromState(e.target.value)}
      />
      <input
        placeholder={'to'}
        style={style}
        value={toState}
        onChange={e => setToState(e.target.value)}
      />
      <button
        onClick={() => setValState(randomNumFromTo(+fromState, +toState).toString())}
      >
        Get random integer
      </button>
      <div>
        Random number: <b>{valState}</b>
      </div>
    </>
  );
}

const toRender = <Component />;

export const randomIntegerNumberFunction = {
  title: <>Random integer number function</>,
  date: '2021.10.19',
  tagsArr: ['function', 'vanilla', 'js', 'JavaScript'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Function returns integer number between values <i>from</i> & <i>to</i>
          .
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function randomNumFromTo(from, to) {
          return Math.floor(Math.random() * (to - from + 1) + from);
        }
      `,
    },
    {
      type: 'text',
      val: 'Full code',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useState } from 'react';
        const style = { width: '50px', marginRight: '10px' };
        
        function Component() {
          const [valState, setValState] = useState('?');
          const [fromState, setFromState] = useState();
          const [toState, setToState] = useState();
        
          function randomNumFromTo(from, to) {
            if (from === to && from === 0) { from = 1; to = 100}
            if (isNaN(from)) from = 1
            if (isNaN(to)) to = 100
            return Math.floor(Math.random() * (to - from + 1) + from);
          }
        
          return (
            <>
              <input
                placeholder={'from'}
                style={style}
                value={fromState}
                onChange={e => setFromState(e.target.value)}
              />
              <input
                placeholder={'to'}
                style={style}
                value={toState}
                onChange={e => setToState(e.target.value)}
              />
              <button
                onClick={() => setValState(randomNumFromTo(+fromState, +toState).toString())}
              >
                Get random integer
              </button>
              <div>
                Random number: <b>{valState}</b>
              </div>
            </>
          );
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
