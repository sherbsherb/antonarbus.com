import React from 'react';
import { Lnk } from './../components/Lnk';
import { gsap } from "gsap";
import { CodeSpan } from '../components/CodeSpan';
import CocaColaSvg from './svgPics/cocaCola.svg';
import TelegramSvg from './svgPics/telegram.svg';

const style = {width: '200px', height: '50px', margin: '10px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'}

function Cmpt1() {
  const ref1 = React.useRef()
  const ref2 = React.useRef()
  const ref3 = React.useRef()
  const ref4 = React.useRef()
  
  const animate = () => {
    gsap.to(ref1.current, { duration: 1, x: 300 });
    gsap.to('#id450', { duration: 2, x: 300 });
    gsap.to('.class564', { duration: 3, rotation: 360, scale: 0.5 });
    gsap.to('div span.class498', { duration: 1, opacity: 0.1 });
    gsap.to([ref2.current, ref3.current, ref4.current], {
      duration: 4, x: 50, y: 20, backgroundColor: 'purple', borderRadius: '50%', border: "5px solid orange"
    });
  };

  return (
    <>
      <div ref={ref1} style={style}>ref1</div>
      <div id="id450" style={style}>#id450</div>
      <div className="class564" style={style}>.class564</div>
      <div className="class564" style={style}>.class564</div>
      <div style={style}><span className="class498">div span.class498</span></div>
      <div ref={ref2} style={style}>ref2</div>
      <div ref={ref3} style={style}>ref3</div>
      <div ref={ref4} style={style}>ref4</div>

      <button onClick={animate}>Animate</button>
    </>
  );
}
const toRender1 = <Cmpt1 />;

function Cmpt2() {
  const ref1 = React.useRef()
  const ref2 = React.useRef()
  const ref3 = React.useRef()
  const ref4 = React.useRef()

  const animate = () => {
    gsap.to(ref1.current, { duration: 2, x: 100, ease: 'bounce.in' });
    gsap.to(ref2.current, { duration: 2, x: 100, ease: 'bounce.out' });
    gsap.to(ref3.current, { duration: 2, x: 100, ease: 'bounce.inOut' });
    gsap.to(ref4.current, { duration: 2, x: 100, ease: 'steps(12)' });
  };

  return (
    <>
      <div ref={ref1} style={style}>bounce.in</div>
      <div ref={ref2} style={style}>bounce.out</div>
      <div ref={ref3} style={style}>bounce.inOut</div>
      <div ref={ref4} style={style}>steps(12)</div>

      <button onClick={animate}>Animate</button>
    </>
  );
}
const toRender2 = <Cmpt2 />;

function Cmpt3() {
  const ref1 = React.useRef()
  const ref2 = React.useRef()

  const animate = () =>
    gsap.to([ref1.current, ref2.current], {
      duration: 3, rotation: 360, scale: 0.1 
    });

  React.useEffect(() => {
    gsap.set(ref1.current, {transformOrigin: "50% 50%", x: '0px'})
    gsap.set(ref2.current, {transformOrigin: "50% 50%", x: '200px'})
  }, [])

  return (
    <>
      {/* eslint-disable-next-line */}
      <img ref={ref1} src={CocaColaSvg} style={{width: '100px'}} /> 
      {/* eslint-disable-next-line */}
      <img ref={ref2} src={TelegramSvg} style={{width: '100px'}} />
      <div><button onClick={animate}>Animate</button></div>
    </>
  );
}
const toRender3 = <Cmpt3 />;

function Cmpt4() {
  const myObject = { someProperty: 0 }
  const [start, setStart] = React.useState('')
  const [update, setUpdate] = React.useState('')
  const [complete, setComplete] = React.useState('')

  const animate = () =>
    gsap.to(myObject, {
      duration: 5,
      someProperty: 1000,
      onStart: () => setStart('gsap started'),
      onUpdate: () => setUpdate(myObject.someProperty.toString()),
      onComplete: () => setComplete('gsap completed'),
    });

  return (
    <>
      <div>Custom object property animation & callback functions</div>
      <div>{start}</div>
      <div>{update}</div>
      <div>{complete}</div>
      <div><button onClick={animate}>Animate</button></div>
    </>
  );
}
const toRender4 = <Cmpt4 />;

function Cmpt5() {
  const ref1 = React.useRef()
  const ref2 = React.useRef()

  const animate = () => {
    gsap.to(ref1.current, {duration: 3, scale: .1, opacity: .1});
    gsap.from(ref2.current, {duration: 3, scale: .1, opacity: .1});
  }

  React.useEffect(() => {
    gsap.set(ref1.current, {transformOrigin: "50% 50%", x: '0px'})
    gsap.set(ref2.current, {transformOrigin: "50% 50%", x: '200px'})
  }, [])

  return (
    <>
      {/* eslint-disable-next-line */}
      <img ref={ref1} src={CocaColaSvg} style={{width: '100px'}} />
      {/* eslint-disable-next-line */}
      <img ref={ref2} src={CocaColaSvg} style={{width: '100px'}} />
      <div><button onClick={animate}>Animate</button></div>
    </>
  );
}
const toRender5 = <Cmpt5 />;

function Circle(props) {
  const style = { display: 'inline-block', margin: '10px', width: '50px', height: '50px', borderRadius: '50%', background: props.color }
  return <div style={style} className="circle945"/>
}
function Cmpt6() {
  const resetAnimation = () =>  gsap.set('.circle945', {scale: '.2', opacity: '.2', y: '-50'})
  const animate = () => gsap.to('.circle945', {duration: 1, scale: 1, opacity: 1, y: 0})
  const animateWithStagger = () => gsap.to('.circle945', {duration: 1, scale: 1, opacity: 1, y: 0, stagger: .25})
  return (
    <>
      <Circle color="grey" />
      <Circle color="green" />
      <Circle color="blue" />
      <Circle color="purple" />
      <Circle color="orange" />
      <div><button onClick={() => { resetAnimation(); animate(); }} >Animate</button></div>
      <div><button onClick={() => { resetAnimation(); animateWithStagger(); }}> Animate with stagger </button> </div>
    </>
  );
}
const toRender6 = <Cmpt6 />;

export const gsapBasics = {
  title: "GSAP basics",
  date: '2021.11.12',
  tagsArr: ['react', 'animation', 'gsap'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          We can access elements in gsap by reference & query selector. We also can have an array of target elements.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          GSAP converts parameters into inline style parameters and animate them.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';
        import { gsap } from "gsap";
        import { CodeSpan } from './../components/CodeSpan';

        const style = {width: '200px', height: '50px', margin: '10px', border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'}

        function Cmpt1() {
          const ref1 = React.useRef()
          const ref2 = React.useRef()
          const ref3 = React.useRef()
          const ref4 = React.useRef()
          
          const animate = () => {
            gsap.to(ref1.current, { duration: 1, x: 300 });
            gsap.to('#id450', { duration: 2, x: 300 });
            gsap.to('.class564', { duration: 3, rotation: 360, scale: 0.5 });
            gsap.to('div span.class498', { duration: 1, opacity: 0.1 });
            gsap.to([ref2.current, ref3.current, ref4.current], {
              duration: 4, x: 50, y: 20, backgroundColor: 'purple', borderRadius: '50%', border: "5px solid orange"
            });
          };

          return (
            <>
              <div ref={ref1} style={style}>ref1</div>
              <div id="id450" style={style}>#id450</div>
              <div className="class564" style={style}>.class564</div>
              <div className="class564" style={style}>.class564</div>
              <div style={style}><span className="class498">div span.class498</span></div>
              <div ref={ref2} style={style}>ref2</div>
              <div ref={ref3} style={style}>ref3</div>
              <div ref={ref4} style={style}>ref4</div>
              <button onClick={animate}>Animate</button>
            </>
          );
        }

        const toRender1 = <Cmpt1 />;
      `,
    },
    {
      type: 'output',
      val: toRender1,
    },
    {
      type: 'text',
      val: (
        <>
          Ease function can be applied. All sets of ease function can be found <Lnk path="https://greensock.com/ease-visualizer/">here</Lnk>.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Cmpt2() {
          const ref1 = React.useRef()
          const ref2 = React.useRef()
          const ref3 = React.useRef()
          const ref4 = React.useRef()
        
          const animate = () => {
            gsap.to(ref1.current, { duration: 2, x: 100, ease: 'bounce.in' });
            gsap.to(ref2.current, { duration: 2, x: 100, ease: 'bounce.out' });
            gsap.to(ref3.current, { duration: 2, x: 100, ease: 'bounce.inOut' });
            gsap.to(ref4.current, { duration: 2, x: 100, ease: 'steps(12)' });
          };
        
          return (
            <>
              <div ref={ref1} style={style}>bounce.in</div>
              <div ref={ref2} style={style}>bounce.out</div>
              <div ref={ref3} style={style}>bounce.inOut</div>
              <div ref={ref4} style={style}>steps(12)</div>
        
              <button onClick={animate}>Animate</button>
            </>
          );
        }
        
        const toRender2 = <Cmpt2 />;
      `,
    },
    {
      type: 'output',
      val: toRender2,
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>{'gsap.set(target, propertiesObj)'}</CodeSpan> can be used to set initial state <Lnk path="https://greensock.com/docs/v3/GSAP/gsap.set">properties</Lnk>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Cmpt3() {
          const ref1 = React.useRef()
          const ref2 = React.useRef()

          const animate = () =>
            gsap.to([ref1.current, ref2.current], {
              duration: 3, rotation: 360, scale: 0.1 
            });

          React.useEffect(() => {
            gsap.set(ref1.current, {transformOrigin: "50% 50%", x: '0px'})
            gsap.set(ref2.current, {transformOrigin: "50% 50%", x: '200px'})
          }, [])

          return (
            <>
              <img ref={ref1} src={CocaColaSvg} style={{width: '100px'}} />
              <img ref={ref2} src={TelegramSvg} style={{width: '100px'}} />
              <div><button onClick={animate}>Animate</button></div>
            </>
          );
        }

        const toRender3 = <Cmpt3 />;
      `
    },
    {
      type: 'output',
      val: toRender3,
    },
    {
      type: 'text',
      val: (
        <>
          Custom object property animation & callbacks <CodeSpan>onStart: func</CodeSpan>, <CodeSpan>onUpdate: func</CodeSpan>, <CodeSpan>onComplete: func</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Cmpt4() {
          const myObject = { someProperty: 0 }
          const [start, setStart] = React.useState('')
          const [update, setUpdate] = React.useState('')
          const [complete, setComplete] = React.useState('')
        
          const animate = () =>
            gsap.to(myObject, {
              duration: 5,
              someProperty: 1000,
              onStart: () => setStart('gsap started'),
              onUpdate: () => setUpdate(myObject.someProperty.toString()),
              onComplete: () => setComplete('gsap completed'),
            });
        
          return (
            <>
              <div>Custom object property animation & callback functions</div>
              <div>{start}</div>
              <div>{update}</div>
              <div>{complete}</div>
              <div><button onClick={animate}>Animate</button></div>
            </>
          );
        }
        const toRender4 = <Cmpt4 />;
      `
    },
    {
      type: 'output',
      val: toRender4,
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>gsap.to()</CodeSpan> vs <CodeSpan>gsap.from()</CodeSpan>
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Cmpt5() {
          const ref1 = React.useRef()
          const ref2 = React.useRef()
        
          const animate = () => {
            gsap.to(ref1.current, {duration: 3, scale: .1, opacity: .1});
            gsap.from(ref2.current, {duration: 3, scale: .1, opacity: .1});
          }
        
          React.useEffect(() => {
            gsap.set(ref1.current, {transformOrigin: "50% 50%", x: '0px'})
            gsap.set(ref2.current, {transformOrigin: "50% 50%", x: '200px'})
          }, [])
        
          return (
            <>
              <img ref={ref1} src={CocaColaSvg} style={{width: '100px'}} />
              <img ref={ref2} src={CocaColaSvg} style={{width: '100px'}} />
              <div><button onClick={animate}>Animate</button></div>
            </>
          );
        }
        const toRender5 = <Cmpt5 />;
      `
    },
    {
      type: 'output',
      val: toRender5,
    },
    {
      type: 'text',
      val: (
        <>
          <CodeSpan>stagger</CodeSpan> property puts a delay between animations. 
          <Lnk path="https://greensock.com/docs/v3/Staggers">Advanced</Lnk> stagger object can be applied.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        function Circle(props) {
          const style = { display: 'inline-block', margin: '10px', width: '50px', height: '50px', borderRadius: '50%', background: props.color }
          return <div style={style} className="circle945"/>
        }
        function Cmpt6() {
          const resetAnimation = () =>  gsap.set('.circle945', {scale: '.2', opacity: '.2', y: '-50'})
          const animate = () => gsap.to('.circle945', {duration: 1, scale: 1, opacity: 1, y: 0})
          const animateWithStagger = () => gsap.to('.circle945', {duration: 1, scale: 1, opacity: 1, y: 0, stagger: .25})
          return (
            <>
              <Circle color="grey" />
              <Circle color="green" />
              <Circle color="blue" />
              <Circle color="purple" />
              <Circle color="orange" />
              <div><button onClick={() => { resetAnimation(); animate(); }} >Animate</button></div>
              <div><button onClick={() => { resetAnimation(); animateWithStagger(); }}> Animate with stagger </button></div>
            </>
          );
        }
        const toRender6 = <Cmpt6 />;
      `
    },
    {
      type: 'output',
      val: toRender6,
    },
  ],
};
