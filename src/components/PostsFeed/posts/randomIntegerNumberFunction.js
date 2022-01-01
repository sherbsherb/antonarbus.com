import { useState } from 'react'
import randomNumFromTo from '../../../helpers/functions/randomNumFromTo'
import useAnimatedWrapper from '../../../helpers/functions/useAnimatedWrapper'
import useInput from '../../../helpers/functions/useInput'
const style = { width: '50px', marginRight: '10px' }

function Component() {
  const [valState, setValState] = useState(0)
  const [AnimationWrapper, turnAnimationOn] = useAnimatedWrapper()
  const [inputFromState, bindInputFrom] = useInput()
  const [inputToState, bindInputTo] = useInput()

  return (
    <>
      <input placeholder='from' style={style} {...bindInputFrom} />
      <input placeholder={'to'} style={style} {...bindInputTo} />
      <button
        onClick={() => {
          setValState(randomNumFromTo(inputFromState, inputToState))
          turnAnimationOn()
        }}
      >
        Get random integer
      </button>
      <div>
        Random number: <AnimationWrapper>{valState}</AnimationWrapper>
      </div>
    </>
  )
}

const toRender = <Component />

export const randomIntegerNumberFunction = {
  title: <>Random integer number</>,
  date: '2021.10.31',
  tagsArr: ['function', 'vanilla', 'JavaScript', 'animation'],
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
          from = parseInt(from)
          to = parseInt(to)
          if (from === to && from === 0) [from, to] = [1, 100]
          if (isNaN(from) || isNaN(to)) [from, to] = [1, 100]
          if (from > to) [from, to] = [to, from]
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
        import randomNumFromTo from '../../../helpers/functions/randomNumFromTo';
        import useAnimatedWrapper from '../../../helpers/functions/useAnimatedWrapper';
        import useInput from '../../../helpers/functions/useInput';
        const style = { width: '50px', marginRight: '10px' };
        
        function Component() {
          const [valState, setValState] = useState(0);
          const [AnimationWrapper, turnAnimationOn] = useAnimatedWrapper();
          const [inputFromState, bindInputFrom] = useInput()
          const [inputToState, bindInputTo] = useInput()
        
          return (
            <>
              <input placeholder='from' style={style} {...bindInputFrom} />
              <input placeholder={'to'} style={style} {...bindInputTo} />
              <button
                onClick={() => {
                  setValState(randomNumFromTo(inputFromState, inputToState));
                  turnAnimationOn();
                }}
              >
                Get random integer
              </button>
              <div>
                Random number: <AnimationWrapper>{valState}</AnimationWrapper>
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
}
