import React from 'react';
import { Lnk } from './../components/Lnk';
import { gsap } from "gsap";
import { CodeSpan } from '../components/CodeSpan';

function Component() {
  const ref = React.useRef()
  const rotate = () => gsap.to(ref.current, { rotation: "+=360" });

  // animation on component load
  React.useEffect(() => {
    rotate();
  }, []);

  return (
  <>
    <div ref={ref} style={{width: '100px', height: '100px', background: 'LightGrey', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      Box
    </div>
    <button onClick={rotate}>Rotate</button>
  </>
    
  );
}

const toRender = <Component />;

export const gsapAndReact = {
  title: "GSAP in React",
  date: '2021.11.11',
  tagsArr: ['react', 'animation', 'gsap'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          <Lnk path="https://greensock.com/get-started/">GSAP</Lnk> in the JS animation library.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Install the <Lnk path="https://www.npmjs.com/package/gsap">library</Lnk> via npm <CodeSpan>{'npm i gsap'}</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Use <i>gsap</i> in React via <CodeSpan>{'React.useRef()'}</CodeSpan> hook to target an element.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';
        import { gsap } from "gsap";

        function Component() {
          const ref = React.useRef()
          const rotate = () => gsap.to(ref.current, { rotation: "+=360" });

          // animation on component load
          React.useEffect(() => {
            rotate();
          }, []);

          return (
          <>
            <div ref={ref} style={{width: '100px', height: '100px', background: 'LightGrey', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              Box
            </div>
            <button onClick={rotate}>Rotate</button>
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
