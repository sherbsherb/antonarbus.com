import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
const style = { width: '50px', marginRight: '10px' };

const pulse = keyframes`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`

const Num = styled.span`
  display: inline-block;
  font-weight: 600;
  animation: ${props => !!props.animateNow ? pulse : '' } 0.2s ease-in-out;
`

function Component() {
  const [valState, setValState] = useState('?');
  const [fromState, setFromState] = useState('');
  const [toState, setToState] = useState('');
  const [animateState, setAnimateState] = useState(0);
  const ref = useRef()

  function randomNumFromTo(from, to) {
    if (from === to && from === 0) [from, to] = [1, 100]
    if (isNaN(from) || isNaN(to)) [from, to] = [1, 100]
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
        onClick={() => {
          setValState(randomNumFromTo(+fromState, +toState).toString())
          setAnimateState(1)
        }}
        
      >
        Get random integer
      </button>
      <div>
        Random number: <Num ref={ref} animateNow={animateState} onAnimationEnd={() => {
          setAnimateState(0)
        }}>{valState}</Num>
      </div>
    </>
  );
}

const toRender = <Component />;

export const randomIntegerNumberFunction = {
  title: <>Random integer number function</>,
  date: '2021.10.19',
  tagsArr: ['function', 'vanilla', 'js', 'JavaScript', 'animation'],
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
        import React, { useRef, useState } from 'react';
        import styled, { keyframes } from 'styled-components';
        const style = { width: '50px', marginRight: '10px' };
        
        const pulse = keyframes\`
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        \`
        
        const Num = styled.span\`
          display: inline-block;
          font-weight: 600;
          animation: \${props => !!props.animateNow ? pulse : '' } 0.2s ease-in-out;
        \`
        
        function Component() {
          const [valState, setValState] = useState('?');
          const [fromState, setFromState] = useState('');
          const [toState, setToState] = useState('');
          const [animateState, setAnimateState] = useState(0);
          const ref = useRef()
        
          function randomNumFromTo(from, to) {
            if (from === to && from === 0) [from, to] = [1, 100]
            if (isNaN(from) || isNaN(to)) [from, to] = [1, 100]
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
                onClick={() => {
                  setValState(randomNumFromTo(+fromState, +toState).toString())
                  setAnimateState(1)
                }}
                
              >
                Get random integer
              </button>
              <div>
                Random number: <Num ref={ref} animateNow={animateState} onAnimationEnd={() => {
                  setAnimateState(0)
                }}>{valState}</Num>
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