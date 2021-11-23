import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Lnk } from '../components/Lnk';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { CodeSpan } from '../components/CodeSpan';
import randomNumFromTo from './../../../helpers/functions/randomNumFromTo';

gsap.registerPlugin(ScrollToPlugin);

function Cmpt() {
  const ref = useRef()
  const scroll400pxDown = () => gsap.to(ref.current, {duration: 2, scrollTo: 400});
  const scrollToId = () => gsap.to(ref.current, {duration: 2, scrollTo: "#final-line"});
  const scrollToIdWithOffset = () => gsap.to(ref.current, {duration: 2, scrollTo: {y: "#final-line", offsetY: 50}});
  const scrollWindow = () => gsap.to(window, {duration: 2, scrollTo: 400});
  const scrollXY = () => gsap.to(ref.current, {duration: 2, scrollTo: {y: 500, x: 500}, ease: "power2"});
  const scrollWithAutoKill = () => gsap.to(ref.current, {duration: 4, scrollTo:{y: 400, autoKill: true, onAutoKill: () => alert("autoKill")}});
  const scrollMax = () => gsap.to(ref.current, {duration: 2, scrollTo: {y: "max"}});
  const scrollMin = () => gsap.to(ref.current, {duration: 2, scrollTo: {y: "min"}});

  return (
    <div>
      <button onClick={scroll400pxDown}>scroll 400 px down</button>
      <button onClick={scrollToId}>scroll to id</button>
      <button onClick={scrollToIdWithOffset}>scroll to id with offset</button>
      <button onClick={scrollWindow}>scroll window</button>
      <button onClick={scrollXY}>scroll X & Y</button>
      <button onClick={scrollWithAutoKill}>scroll with autokill (drag scrollbar)</button>
      <button onClick={scrollMax}>scroll max</button>
      <button onClick={scrollMin}>scroll min</button>

      <Div ref={ref}>
        {new Array(20).fill('').map(() => <Line/>)}
        <div id="final-line" style={{background:`red`}}>final line with id</div>
        {new Array(20).fill('').map(() => <Line/>)}
      </Div>
    </div>
  )
}
const rand = () => randomNumFromTo(0, 255)
const Line = () => <div style={{
  background:`rgb(${rand()} ${rand()} ${rand()} / 30%)`, 
  width: "1000px"}}
>
  line
</div> 

const Div = styled.div `
  height: 300px;
  overflow: auto;
`

const toRender = <Cmpt />

export const gsapScrollTo = {
  title: 'GSAP ScrollToPlugin',
  date: '2021.11.23',
  tagsArr: ['gsap', 'animation'],
  postParts: [
    {
      type: 'text',
      val: (
        <>
          Scroll on click can be smoothed natively by {' '}
          <Lnk path="https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior">CSS</Lnk> property <CodeSpan>{"scroll-behavior: smooth"}</CodeSpan>
          .
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Or by{' '}
          <Lnk path="https://css-tricks.com/snippets/jquery/smooth-scrolling/">JS</Lnk> with{' '}
          <CodeSpan>{"window.scroll({top: 2500, left: 0, behavior: 'smooth'})"}</CodeSpan> or{' '}
          <CodeSpan>{"window.scrollBy({top: 100, left: 0, behavior: 'smooth'})"}</CodeSpan>{' '}
          or <CodeSpan>{"el.scrollIntoView({ behavior: 'smooth' })"}</CodeSpan>
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          But with <Lnk path="https://greensock.com/docs/v3/Plugins/ScrollToPlugin">GSAP ScrollToPlugin</Lnk> we can control the smoothness of scroll.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React, { useEffect, useRef } from 'react';
        import styled from 'styled-components';
        import { gsap } from 'gsap';
        import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
        import randomNumFromTo from './../../../helpers/functions/randomNumFromTo';

        gsap.registerPlugin(ScrollToPlugin);

        function Cmpt() {
          const ref = useRef()
          const scroll400pxDown = () => gsap.to(ref.current, {duration: 2, scrollTo: 400});
          const scrollToId = () => gsap.to(ref.current, {duration: 2, scrollTo: "#final-line"});
          const scrollToIdWithOffset = () => gsap.to(ref.current, {duration: 2, scrollTo: {y: "#final-line", offsetY: 50}});
          const scrollWindow = () => gsap.to(window, {duration: 2, scrollTo: 400});
          const scrollXY = () => gsap.to(ref.current, {duration: 2, scrollTo: {y: 500, x: 500}, ease: "power2"});
          const scrollWithAutoKill = () => gsap.to(ref.current, {duration: 4, scrollTo:{y: 400, autoKill: true, onAutoKill: () => alert("autoKill")}});
          const scrollMax = () => gsap.to(ref.current, {duration: 2, scrollTo: {y: "max"}});
          const scrollMin = () => gsap.to(ref.current, {duration: 2, scrollTo: {y: "min"}});

          return (
            <div>
              <button onClick={scroll400pxDown}>scroll 400 px down</button>
              <button onClick={scrollToId}>scroll to id</button>
              <button onClick={scrollToIdWithOffset}>scroll to id with offset</button>
              <button onClick={scrollWindow}>scroll window</button>
              <button onClick={scrollXY}>scroll X & Y</button>
              <button onClick={scrollWithAutoKill}>scroll with autokill (drag scrollbar)</button>
              <button onClick={scrollMax}>scroll max</button>
              <button onClick={scrollMin}>scroll min</button>

              <Div ref={ref}>
                {new Array(20).fill('').map(() => <Line/>)}
                <div id="final-line" style={{background:\`red\`}}>final line with id</div>
                {new Array(20).fill('').map(() => <Line/>)}
              </Div>
            </div>
          )
        }
        const rand = () => randomNumFromTo(0, 255)
        const Line = () => <div style={{
          background:\`rgb(\${rand()} \${rand()} \${rand()} / 30%)\`, 
          width: "1000px"}}
        >
          line
        </div> 

        const Div = styled.div \`
          height: 300px;
          overflow: auto;
        \`

        const toRender = <Cmpt />
      `,
    },
    {
      type: 'output',
      val: toRender
    },
  ],
};