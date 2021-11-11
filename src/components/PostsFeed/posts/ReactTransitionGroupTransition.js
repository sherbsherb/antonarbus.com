import React, { useRef, useState } from 'react';
import { CodeSpan } from '../components/CodeSpan';
import { Lnk } from '../components/Lnk';
import { Transition } from 'react-transition-group';

function Component1() {
  const [inProp, setInProp] = useState(false);
  const initCss = {
    background: 'yellow',
    margin: '5px 0px',
    whiteSpace: 'nowrap',
    width: '1000px',
  };
  const transitionCss = {
    entering: { width: '10px', transition: `all ${100}ms linear`, },
    entered: { width: '600px', transition: `all ${200}ms linear`, },
    exiting: { width: '200px', transition: `all ${300}ms linear`, },
    exited: { width: '100px', transition: `all ${400}ms linear`,  },
  };

  const ref = useRef()
  const onEnterRef = useRef()
  const onEnteringRef = useRef()
  const onEnteredRef = useRef()
  const onExitRef = useRef()
  const onExitingRef = useRef()
  const onExitedRef = useRef()
  const onEnterDeltaRef = useRef()
  const onEnteringDeltaRef = useRef()
  const onEnteredDeltaRef = useRef()
  const onExitDeltaRef = useRef()
  const onExitingDeltaRef = useRef()
  const onExitedDeltaRef = useRef()
  const onEnterWidthRef = useRef()
  const onEnteringWidthRef = useRef()
  const onEnteredWidthRef = useRef()
  const onExitWidthRef = useRef()
  const onExitingWidthRef = useRef()
  const onExitedWidthRef = useRef()

  const timeStamp = () => Date.now()

  return (
    <>
      <Transition 
        in={inProp} 
        timeout={{
          enter: 5000,
          exit: 2000,
        }}
        onEnter={() => {
          onEnterRef.current.innerHTML = timeStamp()
          onEnterDeltaRef.current.innerHTML = '0'
          onEnterWidthRef.current.innerHTML = ref.current.style.width
        }}
        onEntering={() => {
          onEnteringRef.current.innerHTML = timeStamp()
          onEnteringDeltaRef.current.innerHTML = +onEnteringRef.current.innerText - +onEnterRef.current.innerText
          onEnteringWidthRef.current.innerHTML = ref.current.style.width
        }}
        onEntered={() => {
          onEnteredRef.current.innerHTML = timeStamp()
          onEnteredDeltaRef.current.innerHTML = +onEnteredRef.current.innerText - +onEnteringRef.current.innerText
          onEnteredWidthRef.current.innerHTML = ref.current.style.width
        }}
        onExit={() => {
          onExitRef.current.innerHTML = timeStamp()
          onExitDeltaRef.current.innerHTML = '0'
          onExitWidthRef.current.innerHTML = ref.current.style.width
        }}
        onExiting={() => {
          onExitingRef.current.innerHTML = timeStamp()
          onExitingDeltaRef.current.innerHTML = +onExitingRef.current.innerText - +onExitRef.current.innerText 
          onExitingWidthRef.current.innerHTML = ref.current.style.width
        }}
        onExited={() => {
          onExitedRef.current.innerHTML = timeStamp()
          onExitedDeltaRef.current.innerHTML = +onExitedRef.current.innerText - +onExitingRef.current.innerText
          onExitedWidthRef.current.innerHTML = ref.current.style.width
        }}
      >
        {state => (
          <div style={{ ...initCss, ...transitionCss[state] }} ref={ref}>
            <div>onEnter: <span ref={onEnterRef}></span>; delta = <span ref={onEnterDeltaRef}></span>ms; width: <span ref={onEnterWidthRef}></span></div>
            <div>onEntering: <span ref={onEnteringRef}></span>; delta = <span ref={onEnteringDeltaRef}></span>ms; width: <span ref={onEnteringWidthRef}></span></div>
            <div>onEntered: <span ref={onEnteredRef}></span>; delta = <span ref={onEnteredDeltaRef}></span>ms; width: <span ref={onEnteredWidthRef}></span></div>
            <div>onExit: <span ref={onExitRef}></span>; delta = <span ref={onExitDeltaRef}></span>ms; width: <span ref={onExitWidthRef}></span></div>
            <div>onExiting: <span ref={onExitingRef}></span>; delta = <span ref={onExitingDeltaRef}></span>ms; width: <span ref={onExitingWidthRef}></span></div>
            <div>onExited: <span ref={onExitedRef}></span>; delta = <span ref={onExitedDeltaRef}></span>ms; width: <span ref={onExitedWidthRef}></span></div>
          </div>
        )}
      </Transition>

      <button 
        onClick={() => {
          setInProp(!inProp)
        }}
      >
        Toggle transition
      </button>
    </>
  );
}

const toRender1 = <Component1 />;

function Component2() {
  const [inProp, setInProp] = useState(false);
  const initCss = {
    background: 'yellow',
    margin: '5px 0px',
    whiteSpace: 'nowrap',
    width: '1000px',
  };
  const transitionCss = {
    entering: { width: '100px', transition: `all ${0}ms linear`, },
    entered: { width: '600px', transition: `all ${200}ms linear`, },
    exiting: { width: '600px', transition: `all ${0}ms linear`, },
    exited: { width: '100px', transition: `all ${400}ms linear`,  },
  };

  const ref = useRef()
  const onEnterRef = useRef()
  const onEnteringRef = useRef()
  const onEnteredRef = useRef()
  const onExitRef = useRef()
  const onExitingRef = useRef()
  const onExitedRef = useRef()
  const onEnterDeltaRef = useRef()
  const onEnteringDeltaRef = useRef()
  const onEnteredDeltaRef = useRef()
  const onExitDeltaRef = useRef()
  const onExitingDeltaRef = useRef()
  const onExitedDeltaRef = useRef()
  const onEnterWidthRef = useRef()
  const onEnteringWidthRef = useRef()
  const onEnteredWidthRef = useRef()
  const onExitWidthRef = useRef()
  const onExitingWidthRef = useRef()
  const onExitedWidthRef = useRef()

  const timeStamp = () => Date.now()

  return (
    <>
      <Transition 
        in={inProp} 
        timeout={{
          enter: 0,
          exit: 0,
        }}
        onEnter={() => {
          onEnterRef.current.innerHTML = timeStamp()
          onEnterDeltaRef.current.innerHTML = '0'
          onEnterWidthRef.current.innerHTML = ref.current.style.width
        }}
        onEntering={() => {
          onEnteringRef.current.innerHTML = timeStamp()
          onEnteringDeltaRef.current.innerHTML = +onEnteringRef.current.innerText - +onEnterRef.current.innerText
          onEnteringWidthRef.current.innerHTML = ref.current.style.width
        }}
        onEntered={() => {
          onEnteredRef.current.innerHTML = timeStamp()
          onEnteredDeltaRef.current.innerHTML = +onEnteredRef.current.innerText - +onEnteringRef.current.innerText
          onEnteredWidthRef.current.innerHTML = ref.current.style.width
        }}
        onExit={() => {
          onExitRef.current.innerHTML = timeStamp()
          onExitDeltaRef.current.innerHTML = '0'
          onExitWidthRef.current.innerHTML = ref.current.style.width
        }}
        onExiting={() => {
          onExitingRef.current.innerHTML = timeStamp()
          onExitingDeltaRef.current.innerHTML = +onExitingRef.current.innerText - +onExitRef.current.innerText 
          onExitingWidthRef.current.innerHTML = ref.current.style.width
        }}
        onExited={() => {
          onExitedRef.current.innerHTML = timeStamp()
          onExitedDeltaRef.current.innerHTML = +onExitedRef.current.innerText - +onExitingRef.current.innerText
          onExitedWidthRef.current.innerHTML = ref.current.style.width
        }}
      >
        {state => (
          <div style={{ ...initCss, ...transitionCss[state] }} ref={ref}>
            <div>onEnter: <span ref={onEnterRef}></span>; delta = <span ref={onEnterDeltaRef}></span>ms; width: <span ref={onEnterWidthRef}></span></div>
            <div>onEntering: <span ref={onEnteringRef}></span>; delta = <span ref={onEnteringDeltaRef}></span>ms; width: <span ref={onEnteringWidthRef}></span></div>
            <div>onEntered: <span ref={onEnteredRef}></span>; delta = <span ref={onEnteredDeltaRef}></span>ms; width: <span ref={onEnteredWidthRef}></span></div>
            <div>onExit: <span ref={onExitRef}></span>; delta = <span ref={onExitDeltaRef}></span>ms; width: <span ref={onExitWidthRef}></span></div>
            <div>onExiting: <span ref={onExitingRef}></span>; delta = <span ref={onExitingDeltaRef}></span>ms; width: <span ref={onExitingWidthRef}></span></div>
            <div>onExited: <span ref={onExitedRef}></span>; delta = <span ref={onExitedDeltaRef}></span>ms; width: <span ref={onExitedWidthRef}></span></div>
          </div>
        )}
      </Transition>

      <button 
        onClick={() => {
          setInProp(!inProp)
        }}
      >
        Toggle transition
      </button>
    </>
  );
}

const toRender2 = <Component2 />;


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
        import React, { useRef, useState } from 'react';
        import { Transition } from 'react-transition-group';
        
        function Component() {
          const [inProp, setInProp] = useState(false);
          const initCss = {
            background: 'yellow',
            margin: '5px 0px',
            whiteSpace: 'nowrap',
            width: '1000px',
          };
          const transitionCss = {
            entering: { width: '10px', transition: \`all \${100}ms linear\`, },
            entered: { width: '600px', transition: \`all \${200}ms linear\`, },
            exiting: { width: '200px', transition: \`all \${300}ms linear\`, },
            exited: { width: '100px', transition: \`all \${400}ms linear\`,  },
          };
        
          // some code skipped
        
          return (
            <>
              <Transition 
                in={inProp} 
                timeout={{
                  enter: 5000,
                  exit: 2000,
                }}
                // some code skipped
              >
                {state => (
                  <div style={{ ...initCss, ...transitionCss[state] }} ref={ref}>
                    // some code skipped
                  </div>
                )}
              </Transition>
        
              <button onClick={() => { setInProp(!inProp) }} > Toggle transition</button>
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
    {
      type: 'text',
      val: `Let's get a closer look to transition css and timeouts.`,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        transitionCss = {
          entering: { width: '10px', transition: \`all \${100}ms linear\`, },
          entered: { width: '600px', transition: \`all \${200}ms linear\`, },
          exiting: { width: '200px', transition: \`all \${300}ms linear\`, },
          exited: { width: '100px', transition: \`all \${400}ms linear\`,  },
        };

        timeout = {{ enter: 5000,  exit: 2000 }}
      `,
    },
    {
      type: '',
      val: (
        <>
          Basically happens following:

          <ul>
            <li>{`init width 100px as in 'exited' CSS`}</li>
            <li>{`we click btn to make prop in={true}`}</li>
            <li>{`'entering' CSS applied immediately --> in 0.1s width becomes 10px`}</li>
            <li>{`'entered' CSS applied in 5s --> in 0.2s width becomes 600px`}</li>
            <li>{`click btn to make prop in={false}`}</li>
            <li>{`'exiting' CSS applied immediately --> in 0.3s width becomes 200px`}</li>
            <li>{`'exited' CSS applied in 2s --> in 0.4s width becomes 100px`}</li>
          </ul> 
        </>
      ),
    },
    {
      type: 'text',
      val: `According to this logic if we just want width to slide right & left we should modify timeouts and transition durations.`,
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        transitionCss = {
          entering: { width: '100px', transition: \`all \${0}ms linear\`, },
          entered: { width: '600px', transition: \`all \${200}ms linear\`, },
          exiting: { width: '600px', transition: \`all \${0}ms linear\`, },
          exited: { width: '100px', transition: \`all \${400}ms linear\`,  },
        };

        timeout = {{ enter: 0,  exit: 0 }}
      `,
    },
    {
      type: 'output',
      val: toRender2,
    },
  ],
};
