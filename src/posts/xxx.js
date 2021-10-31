import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function useAnimatedWrapper() {
  const [animationState, setAnimationState] = useState(false);
  const turnAnimationOn = () => setAnimationState(true);

  function AnimationWrapper(props) {
    const animationName = keyframeRules => keyframes`${keyframeRules}`;

    const Div = styled.div`
      display: inline-block;

      animation-name: ${props =>props.isAnimationOn ? animationName(props.css.keyframes) : ''};
      animation-duration: ${props => props.css.animationDuration};
      animation-timing-function: ${props => props.css.animationTimingFunction};
      animation-delay: ${props => props.css.animationDelay};
      animation-iteration-count: ${props => props.css.animationIterationCount};
      animation-direction: ${props => props.css.animationDirection};
      animation-fill-mode: ${props => props.css.animationFillMode};
    `;

    const defaultAnimationCss = {
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
    };

    const animationCss = { ...defaultAnimationCss, ...props.animationCss };

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

function Component() {
  const divCss = {
    background: '#e6c0c0',
    margin: '5px',
    padding: '5px',
    cursor: 'pointer',
  };

  const animationCss = {
    animationDuration: '.25s',
    keyframes: `
      0% { transform: translateX(0) }
      10% { transform: translateX(5px) }
      30% { transform: translateX(0) }
      50% { transform: translateX(5px) }
      70% { transform: translateX(0) }
      90% { transform: translateX(5px) }
      100% { transform: translateX(0) }
    `,
  };

  const [AnimationWrapper, turnAnimationOn] = useAnimatedWrapper();
  const [AnimationWrapper2, turnAnimationOn2] = useAnimatedWrapper();

  return (
    <>
      <div>
        <AnimationWrapper>
          <div style={divCss}>Default animation</div>
        </AnimationWrapper>
        <button onClick={turnAnimationOn}>Force animation</button>
      </div>

      <div>
        <AnimationWrapper2 animationCss={animationCss}>
          <div style={divCss}>Custom animation</div>
        </AnimationWrapper2>
        <button onClick={turnAnimationOn2}>Force animation</button>
      </div>
    </>
  );
}

const toRender = <Component />;

export const xxx = {
  title: <>XXX</>,
  date: '2021.10.19',
  tagsArr: ['react', 'animation', 'state', 'css', 'styled'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          We pass the state in props into styled component, which will add
          animation name.
        </>
      ),
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
};
