import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { H3 } from '../components/H3'
import { H5 } from '../components/H5'

const shakeAnimation = keyframes`
  0% { transform: translateX(0) }
  10% { transform: translateX(5px) }
  30% { transform: translateX(0) }
  50% { transform: translateX(5px) }
  70% { transform: translateX(0) }
  90% { transform: translateX(5px) }
  100% { transform: translateX(0) }
`

const SpanWithShake = styled.span`
  display: inline-block;
  animation: ${props => props.animateNow ? shakeAnimation : ''} .3s ease-in-out;
  background: #e6c0c0;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`

function Component() {
  const [animationState, setAnimationState] = useState(false)

  return (
    <>
      <SpanWithShake
        onClick={() => { setAnimationState(true) }}
        animateNow={animationState}
        onAnimationEnd={() => { setAnimationState(false) }}
      >
        Click me to shake
      </SpanWithShake>
    </>
  )
}

const toRender = <Component />

export const animationTriggerByProp = {
  title: <>Start animation by animation name change</>,
  date: '2021.10.19',
  tagsArr: ['react', 'animation', 'state', 'css', 'styled'],
  postParts: [
    {
      type: 'text',
      val: <>We pass the state in props into styled component, which will add animation name.</>,
    },
    {
      type: 'text',
      val: <>When animation ends animation name is removed.</>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useState } from 'react';
        import styled, { keyframes } from 'styled-components';

        const shakeAnimation = keyframes\`
          0% { transform: translateX(0) }
          10% { transform: translateX(5px) }
          30% { transform: translateX(0) }
          50% { transform: translateX(5px) }
          70% { transform: translateX(0) }
          90% { transform: translateX(5px) }
          100% { transform: translateX(0) }
        \`;

        const SpanWithShake = styled.span\`
          display: inline-block;
          animation: \${props => props.animateNow ? shakeAnimation : ''} .3s ease-in-out;
          background: #e6c0c0;
          margin: 5px;
          padding: 5px;
          cursor: pointer;
        \`;

        function Component() {
          const [animationState, setAnimationState] = useState(false);

          return (
            <>
              <SpanWithShake 
                onClick={() => {setAnimationState(true) }}
                animateNow={animationState}
                onAnimationEnd={() => {setAnimationState(false)}}
              >
                Click me to shake
              </SpanWithShake>
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
