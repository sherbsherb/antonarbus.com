import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

export default function useAnimatedWrapper(args) {
  const defaultParams = {
    keyframeCSS: `
      from { transform: scale(0, 0) }
      to { transform: scale(1, 1) } 
    `,
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

const keyframesName = keyframeCSS => keyframes`${keyframeCSS}`;

const Div = styled.div`
  display: inline-block;
  animation-name: ${props =>
    props.animationSettings.keyframeCSS
      ? keyframesName(props.animationSettings.keyframeCSS)
      : ''};
  animation-duration: ${props => props.animationSettings.animationDuration}s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-direction: normal;
  animation-fill-mode: forwards;
`;