import React, { useState } from 'react';
import { CodeSpan } from '../components/post/CodeSpan';
import { Lnk } from '../components/post/Lnk';
import { Transition } from 'react-transition-group';

function Component() {
  const [inProp, setInProp] = useState(false);

  const duration = 1000;
  const initCss = {
    transition: `width ${duration}ms ease-in-out`,
    background: 'yellow',
    margin: '5px 0px',
    whiteSpace: 'nowrap',
  };
  const transitionCss1 = {
    entering: { width: '400px' },
    entered: { width: '400px' },
    exiting: { width: '200px' },
    exited: { width: '200px' },
  };
  const transitionCss2 = {
    entering: { width: '400px' },
    entered: { width: '300px' },
    exiting: { width: '500px' },
    exited: { width: '200px' },
  };

  return (
    <>
      <Transition in={inProp} timeout={duration}>
        {state => (
          <div style={{...initCss,...transitionCss1[state]}}>Hello</div>
        )}
      </Transition>
      <Transition 
        in={inProp} 
        timeout={duration} 
        onEnter={() => console.log('onEnter')}
        onEntering={() => console.log('onEntering')}
        onEntered={() => console.log('onEntered')}
        onExit={() => console.log('onExit')}
        onExiting={() => console.log('onExiting')}
        onExited={() => console.log('onExited')}
      >
        {state => (
          <div style={{...initCss,...transitionCss2[state]}}>Hello</div>
        )}
      </Transition>
      <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit appear enter exit>
        {state => (
          <div style={{...initCss,...transitionCss2[state]}}>Hello</div>
        )}
      </Transition>

      <button onClick={() => setInProp(!inProp)}>Toggle transition</button>
    </>
  );
}

const toRender1 = <Component />;

export const ReactTransitionGroupTransition = {
  title: 'React transition group - transition',
  date: '2021.11.01',
  tagsArr: ['react', 'animation'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Install{' '}
          <Lnk path="https://reactcommunity.org/react-transition-group/">
            library
          </Lnk>{' '}
          from{' '}
          <Lnk path="https://www.npmjs.com/package/react-transition-group">
            npm
          </Lnk>{' '}
          via terminal <CodeSpan>npm i react-transition-group</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useState } from 'react';
        import { CodeSpan } from '../components/post/CodeSpan';
        import { Lnk } from '../components/post/Lnk';
        import { Transition } from 'react-transition-group';

        function Component() {
          const [inProp, setInProp] = useState(false);

          const duration = 1000;
          const initCss = {
            transition: \`width \${duration}ms ease-in-out\`,
            background: 'yellow',
            margin: '5px 0px',
            whiteSpace: 'nowrap',
          };
          const transitionCss1 = {
            entering: { width: '400px' },
            entered: { width: '400px' },
            exiting: { width: '200px' },
            exited: { width: '200px' },
          };
          const transitionCss2 = {
            entering: { width: '400px' },
            entered: { width: '300px' },
            exiting: { width: '500px' },
            exited: { width: '200px' },
          };

          return (
            <>
              <Transition in={inProp} timeout={duration}>
                {state => (
                  <div style={{...initCss,...transitionCss1[state]}}>Hello</div>
                )}
              </Transition>
              <Transition 
                in={inProp} 
                timeout={duration} 
                onEnter={() => console.log('onEnter')}
                onEntering={() => console.log('onEntering')}
                onEntered={() => console.log('onEntered')}
                onExit={() => console.log('onExit')}
                onExiting={() => console.log('onExiting')}
                onExited={() => console.log('onExited')}
              >
                {state => (
                  <div style={{...initCss,...transitionCss2[state]}}>Hello</div>
                )}
              </Transition>
              <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit appear enter exit>
                {state => (
                  <div style={{...initCss,...transitionCss2[state]}}>Hello</div>
                )}
              </Transition>

              <button onClick={() => setInProp(!inProp)}>Toggle transition</button>
            </>
          );
        }

        const toRender1 = <Component />;
      `,
    },

    {
      type: 'output',
      val: toRender1,
    },
  ],
};
