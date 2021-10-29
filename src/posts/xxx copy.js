import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import randomNumFromTo from '../helpers/functions/randomNumFromTo';

function useAnimatedWrapper() {

  const [triggerAnimationState , setTriggerAnimationState] = useState(false);
  const triggerAnimation = () => setTriggerAnimationState(!triggerAnimationState)

  const pulse = keyframes`
    from { transform: scaleY(0); }
    to { transform: scaleY(1); }
  `;

  const Div = styled.div`
    display: inline-block;
    font-weight: 600;
    animation: ${props => (!!props.animateNow ? pulse : '')} 0.2s ease-in-out;
  `;

  function AnimateWrapper(props) {
    const [animateOnState, setAnimateOnState] = useState(false);
    
    const ref = useRef();
    
    useEffect(() => setAnimateOnState(true), [props.children]);

    return (
      <Div
        ref={ref}
        onAnimationEnd={() => setAnimateOnState(false)}
        animateNow={animateOnState}
      >
        {props.children}
      </Div>
    );
  }

  return [triggerAnimation, AnimateWrapper]
}



function Component() {
  const [numState, setNumState] = useState(0);
  const [triggerAnimation,AnimateWrapper] = useAnimatedWrapper()

  return (
    <>
      <button onClick={() => setNumState(randomNumFromTo(1, 1000))}>
        Change number
      </button>
      <button onClick={() => triggerAnimation()}>
        Trigger animation
      </button>
      <div>
        <AnimateWrapper>{numState}</AnimateWrapper>
      </div>
    </>
  );
}

const toRender = <Component />;

export const xxx = {
  title: <>xxx</>,
  date: '2021.10.19',
  tagsArr: ['function', 'vanilla', 'js', 'JavaScript', 'animation'],
  postParts: [
    {
      type: 'text',
      val: 'xxx',
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
      
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
  ],
};
