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

export const gsapBasics = {
  title: "GSAP basics",
  date: '2021.11.12',
  tagsArr: ['react', 'animation'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          xxx
        </>
      ),
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
