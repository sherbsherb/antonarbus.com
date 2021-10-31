import { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function useAnimatedWrapper(args) {

  const animationCss = {       
    keyframes: `
      from { transform: scaleY(0); }
      to { transform: scaleY(1); }
    `,
    animationDuration: '0.3s',
    animationTimingFunction: 'ease-in-out',
    animationDelay: '0s',
    animationIterationCount: 1,
    animationDirection: 'normal',
    animationFillMode: 'forwards', 
    ...args
  };

  const [animationState, setAnimationState] = useState(false);
  const turnAnimationOn = () => setAnimationState(true);

  function AnimationWrapper(props) {
    return (
      <Div
        onAnimationEnd={() => setAnimationState(false)}
        isAnimationOn={animationState}
        css={animationCss}
      >
        {props.children}
      </Div>
    );
  }

  return [AnimationWrapper, turnAnimationOn];
}

const animationName = keyframeRules => keyframes`${keyframeRules}`;

const Div = styled.div`
  display: inline-block;

  animation-name: ${props => props.isAnimationOn ? animationName(props.css.keyframes) : ''};
  animation-duration: ${props => props.css.animationDuration};
  animation-timing-function: ${props => props.css.animationTimingFunction};
  animation-delay: ${props => props.css.animationDelay};
  animation-iteration-count: ${props => props.css.animationIterationCount};
  animation-direction: ${props => props.css.animationDirection};
  animation-fill-mode: ${props => props.css.animationFillMode};
`;