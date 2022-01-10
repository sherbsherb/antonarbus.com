import { gsap } from 'gsap'
import { CSSRulePlugin } from 'gsap/CSSRulePlugin'
import randomNumFromTo from '../../../../../helpers/functions/randomNumFromTo'
import { CodeSpan } from '../../../components/CodeSpan'
import './style73.css'
import { Lnk } from '../../../components/Lnk'

const rand = () => randomNumFromTo(1, 255)
gsap.registerPlugin(CSSRulePlugin)

const rule = CSSRulePlugin.getRule('.style73::after')
gsap.set(rule, { cssRule: { background: 'rgb(255 0 0)' } })
function animate() {
  gsap.to(rule, {
    duration: 1,
    cssRule: { background: `rgb(${rand()} ${rand()} ${rand()})` },
  })
}
function Cmpt() {
  return (
    <>
      <div className="style73" id="dfo9">el</div>
      <button onClick={animate}>Randomize pseudo element's color</button>
    </>
  )
}
const toRender = <Cmpt />

export const gsapCSSRulePlugin = {
  title: 'GSAP CSSRulePlugin & pseudo element',
  date: '2021.11.22',
  tagsArr: ['gsap', 'animation'],
  postParts: [
    {
      type: 'text',
      val: <>JS can not select pseudo elements, but 'CSSRulePlugin' can.</>,
    },
    {
      type: 'text',
      val: <>With <Lnk path="https://greensock.com/docs/v3/Plugins/CSSRulePlugin">CSSRulePlugin</Lnk> we can animate <i>::after</i> element.</>,
    },
    {
      type: 'text',
      val: (
        <>
          Selector in{' '}
          <CodeSpan>{'CSSRulePlugin.getRule(selector)'}</CodeSpan>{' '}
          should be exactly the same as in CSS stylesheet.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          Because of that I use real CSS sheet for styling instead of{' '}
          <i>Styled Components</i> because it applies random class names.
        </>
      ),
    },
    {
      type: 'code',
      lang: 'jsx',
      val: `
        import React from 'react';
        import { gsap } from 'gsap';
        import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
        import randomNumFromTo from '../../../../helpers/functions/randomNumFromTo';
        import './style73.css';

        const rand = () => randomNumFromTo(1, 255);
        gsap.registerPlugin(CSSRulePlugin);

        const rule = CSSRulePlugin.getRule('.style73::after');
        gsap.set(rule, {cssRule:{background: \`rgb(255 0 0)\`}})
        function animate() {
          gsap.to(rule, {
            duration: 1,
            cssRule: { background: \`rgb(\${rand()} \${rand()} \${rand()})\` },
          });
        }
        function Cmpt() {
          return (
            <>
              <div className="style73" id="dfo9">el</div>
              <button onClick={animate}>Randomize pseudo element's color</button>
            </>
          );
        }
        const toRender = <Cmpt />;
      `,
    },
    {
      type: 'code',
      lang: 'css',
      val: `
        /* style73.css */
        .style73 {
          display: flex;
          justify-content: center; 
          align-items: center;
          width: 100px;
          height: 100px;
          border: 1px solid black;
          position: relative;
        }
        
        .style73::after {
          content:'::after el';
          background-color: red;
          position: absolute;
          top: 0px;
          right: -80px;
          padding: 5px;
          color: white;
        }
      `,
    },
    {
      type: 'output',
      val: toRender,
    },
    {
      type: 'text',
      val: (
        <>
          Note that we use <CodeSpan>{'gsap.set()'}</CodeSpan> to set initial color.
          No clue why but without it the element blinks on the button first click.
        </>
      ),
    },
    {
      type: 'text',
      val: (
        <>
          On my phone it still blinks, maybe easier to avoid pseudo elements animation and use normal elements.
          And indeed, GSAP creators <Lnk path='https://greensock.com/docs/v3/Plugins/CSSRulePlugin#:~:text=convert%20your%20pseudo%2Delements%20to%20real%20HTML%20elements%20and%20animate%20them%20directly'>suggest to</Lnk> <i><q>convert your pseudo-elements to real HTML elements and animate them</q></i>.
        </>
      ),
    },
  ],
}
