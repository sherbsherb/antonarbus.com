import React, { useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import randomNumFromTo from '../helpers/functions/randomNumFromTo';
import useAnimatedWrapper from '../helpers/functions/useAnimatedWrapper';

function Component() {
  const [numState, setNumState] = useState(0);

  const params = {
    keyframeCSS: `
      from { transform: scale(2, 2) }
      to { transform: scale(.5, .5) } 
    `,
    animationDuration: 1,
  };

  const [triggerAnimation, AnimateWrapper] = useAnimatedWrapper();
  const [triggerAnimation2, AnimateWrapper2] = useAnimatedWrapper(params);

  return (
    <>
      <button onClick={() => setNumState(randomNumFromTo(1, 1000))}>
        Change number
      </button>
      <button 
        onClick={() => {
          triggerAnimation();
          triggerAnimation2();
        }}
      >
        Trigger animation
      </button>
      <div><AnimateWrapper>{numState}</AnimateWrapper></div>
      <div><AnimateWrapper2>{numState}</AnimateWrapper2></div>
    </>
  );
}

const toRender = <Component />;

export const useAnimatedWrapperCustomHook = {
  title: <><CodeSpan>useAnimatedWrapper()</CodeSpan> custom hook</>,
  date: '2021.10.29',
  tagsArr: ['react', 'hook', 'animation', 'custom'],
  postParts: [
    {
      type: 'text',
      val: 'Custom hook',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        // useAnimatedWrapper.js
        import { useEffect, useRef, useState } from "react";
        import styled, { keyframes } from "styled-components";

        export default function useAnimatedWrapper(args) {
          const defaultParams = {
            keyframeCSS: \`
              from { transform: scale(0, 0) }
              to { transform: scale(1, 1) } 
            \`,
            animationDuration: 0.2,
          };

          const params = { ...defaultParams, ...args };
          const [triggerAnimationState, setTriggerAnimationState] = useState(false);
          const triggerAnimation = () => setTriggerAnimationState(!triggerAnimationState);

          function AnimateWrapper(props) {
            const [animateOnState, setAnimateOnState] = useState(false);
            const ref = useRef();
            useEffect(() => setAnimateOnState(true), [props.children, animateOnState]);

            return (
              <Div
                ref={ref}
                animateNow={animateOnState}
                animationSettings={params}
              >
                {props.children}
              </Div>
            );
          }

          return [triggerAnimation, AnimateWrapper];
        }

        const keyframesName = keyframeCSS => keyframes\`\${keyframeCSS}\`;

        const Div = styled.div\`
          display: inline-block;
          animation-name: \${props =>
            props.animationSettings.keyframeCSS
              ? keyframesName(props.animationSettings.keyframeCSS)
              : ''};
          animation-duration: \${props => props.animationSettings.animationDuration}s;
          animation-timing-function: ease-in-out;
          animation-delay: 0s;
          animation-direction: normal;
          animation-fill-mode: forwards;
        \`;
      `,
    },
    {
      type: 'text',
      val: 'Usage with custom and default parameters.',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useState } from 'react';
        import randomNumFromTo from '../helpers/functions/randomNumFromTo';
        import useAnimatedWrapper from '../helpers/functions/useAnimatedWrapper';
        
        function Component() {
          const [numState, setNumState] = useState(0);
        
          const params = {
            keyframeCSS: \`
              from { transform: scale(2, 2) }
              to { transform: scale(.5, .5) } 
              \`,
            animationDuration: 1,
          };
        
          const [triggerAnimation, AnimateWrapper] = useAnimatedWrapper();
          const [triggerAnimation2, AnimateWrapper2] = useAnimatedWrapper(params);
        
          return (
            <>
              <button onClick={() => setNumState(randomNumFromTo(1, 1000))}>
                Change number
              </button>
              <button 
                onClick={() => {
                  triggerAnimation();
                  triggerAnimation2();
                }}
              >
                Trigger animation
              </button>
              <div><AnimateWrapper>{numState}</AnimateWrapper></div>
              <div><AnimateWrapper2>{numState}</AnimateWrapper2></div>
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
