import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const popAnimation = keyframes`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`;

const SpanWithPop = styled.span`
  display: inline-block;
  background: #e6c0c0;
  margin: 5px;
  padding: 5px;
  cursor: pointer;

  &.animationClass {
    animation: ${popAnimation} 0.5s ease;
  }
`;

function Component() {
  const [animationState, setAnimationState] = useState(false);

  return (
    <>
      <SpanWithPop 
        className={animationState ? 'animationClass' : ''}
        onClick={() => {setAnimationState(true)}}
        onAnimationEnd={() => {setAnimationState(false)}}
      >
        Click me to pop out
      </SpanWithPop>
    </>
  );
}

const toRender = <Component />;

export const animationTriggerByClass = {
  title: <>Start animation by class name change</>,
  date: '2021.10.19',
  tagsArr: ['react', 'animation', 'state', 'css', 'styled'],
  postParts: [
    {
      type: 'text',
      val: <>Based on state value we apply class, which has animation.</>,
    },
    {
      type: 'text',
      val: <>When animation ends class name is removed.</>,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useState } from 'react';
        import styled, { keyframes } from 'styled-components';

        const popAnimation = keyframes\`
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        \`;

        const SpanWithPop = styled.span\`
          display: inline-block;
          background: #e6c0c0;
          margin: 5px;
          padding: 5px;
          cursor: pointer;

          &.animationClass {
            animation: \${popAnimation} 0.5s ease;
          }
        \`;

        function Component() {
          const [animationState, setAnimationState] = useState(false);

          return (
            <>
              <SpanWithPop 
                className={animationState ? 'animationClass' : ''}
                onClick={() => {setAnimationState(true)}}
                onAnimationEnd={() => {setAnimationState(false)}}
              >
                Click me to pop out
              </SpanWithPop>
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
